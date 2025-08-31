from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np
import cv2
import os
from PIL import Image
import io
import base64
from keras.saving import register_keras_serializable

# Initialize Flask
app = Flask(__name__)
CORS(app)  # Enable cross-origin requests from React frontend

@register_keras_serializable()
def total_loss(y_true, y_pred):
    # Dummy implementation – replace this with actual logic if known
    return tf.reduce_mean(tf.square(y_true - y_pred))

custom_objects = {
    "total_loss": total_loss,
    "dice_coef": lambda y_true, y_pred: 0,
    "iou_coef": lambda y_true, y_pred: 0,
}

model_path = "./model/best_unet_final.keras"
model = tf.keras.models.load_model(model_path, custom_objects=custom_objects)

# Prediction function
def predict_flood_coverage(model, image_array, img_size=(256,256)):
    img_resized = cv2.resize(image_array, img_size) / 255.0
    img_input = np.expand_dims(img_resized.astype(np.float32), 0)
    pred_mask = model.predict(img_input)[0]
    pred_bin = (pred_mask > 0.5).astype(np.float32)
    coverage = float(pred_bin.mean())
    return pred_bin, coverage

# Convert mask to base64 image
def mask_to_base64(mask):
    mask_img = (mask.squeeze() * 255).astype(np.uint8)
    _, buffer = cv2.imencode('.png', mask_img)
    img_b64 = base64.b64encode(buffer).decode('utf-8')
    return img_b64

# API route
@app.route("/predict", methods=["POST"])
def predict():
    if 'image' not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    img_file = request.files['image']
    img = Image.open(img_file).convert('RGB')
    img_array = np.array(img)

    pred_mask, coverage = predict_flood_coverage(model, img_array)

    return jsonify({
        "coverage": coverage,
        "pred_mask": mask_to_base64(pred_mask)
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)


