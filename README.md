# 🌍 Image Segmentation for Disaster Resilience
---
A deep learning-based image segmentation system designed to detect and classify disaster-affected regions from satellite and drone imagery. The project leverages U-Net, ResNet-based encoders, data augmentation, and advanced loss functions to improve segmentation accuracy. This tool aims to support faster response and damage assessment after natural disasters such as floods, earthquakes, and wildfires.

---
## ✨ Features

- 📊 Exploratory Data Analysis (EDA): Image size stats, mask coverage distribution, and visualizations.

- 🧠 Segmentation Models:
  - Vanilla U-Net (from scratch)
  - Pretrained Encoder + U-Net (ResNet50/VGG16 backbones)

- 🔁 Data Augmentation: Rotation, flipping, brightness/contrast, scaling (Albumentations).

- 🎯 Loss & Metrics:
  - Dice Loss
  - Focal Loss
  - Combined Total Loss
  - Evaluation with IoU and Dice Coefficient

- 🖼️ Visualization: Overlay predictions on input images for qualitative assessment.

- 🏆 Evaluation Metrics: Pixel accuracy, IoU, Dice score, and training curves.

- 📂 Dataset Support: Works with xBD, FloodNet, and custom labeled disaster datasets.
---
## 📁 Dataset

- Image Files (satellite/drone images)
- Mask Files (segmentation ground truth)

Examples:
- xBD Dataset
- FloodNet
---
## 🛠️ Tools & Technologies

**Languages & Frameworks:**
Python, TensorFlow / Keras

**Libraries & Models:**
📚 NumPy, Pandas, Matplotlib, Seaborn
🖼️ OpenCV, Albumentations
🧠 TensorFlow, Keras (U-Net, ResNet encoders)
🎯 Scikit-learn (train/test split)

**Version Control:**  
Git, GitHub

**Environment:**
Google Colab, VS Code
---
## 📦 Installation

### Clone the repository:
git clone https://github.com/yourusername/disaster-segmentation.git
cd disaster-segmentation

### Install dependencies:
pip install -r requirements.txt
---
## ▶️ Running the Project

Creating the model:
Run NotDisaster.ipynb 

Running the backend:
Navigate to FloodSense\backend
python app.py

Running the frontend:
Navigate to FloodSense\frontend\floodsense-frontend
npm start
---
## 📊 Evaluation

Models are evaluated using:
- IoU (Intersection over Union)
- Dice Coefficient
- Pixel Accuracy
- Training history plots (loss, IoU, Dice)

Sample visualization:
- Input Image
- Ground Truth Mask
- Predicted Segmentation
---
## 📸 Screenshots
<img width="1920" height="1080" alt="Screenshot (598)" src="https://github.com/user-attachments/assets/1e9249d5-c2fc-4afd-9b51-55b644af26eb" />
<img width="1920" height="1080" alt="Screenshot (599)" src="https://github.com/user-attachments/assets/3fb7bf13-3bdf-4ed0-8fa3-f4553a8d0352" />
<img width="1920" height="1080" alt="Screenshot (600)" src="https://github.com/user-attachments/assets/b813f844-e38e-4efe-b52e-f9d59a2e21a3" />
<img width="1920" height="1080" alt="Screenshot (601)" src="https://github.com/user-attachments/assets/03a6ab70-4cfb-43a1-8ecf-a29cc3d2d881" />
<img width="1920" height="1080" alt="Screenshot (602)" src="https://github.com/user-attachments/assets/9f504300-dbe9-459a-b685-7e672b5088de" />

---
## 📌 Future Work

- Add multi-class segmentation (e.g., roads, buildings, vegetation, water).
- Deploy as a Streamlit / Flask app for interactive use.
- Integrate with GIS systems for disaster response agencies.
- Explore transformer-based segmentation (SegFormer, Mask2Former).
---
## 🤝 Contributors

Indu M
Gopika Gokulanadh
Ardra Pradeepkumar S.
Rajalakshmi

---
