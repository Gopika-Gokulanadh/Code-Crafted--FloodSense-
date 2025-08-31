import React from "react";

export default function UploadBox({ onFileChange }) {
  return (
    <div className="upload-box">
      <input
        type="file"
        accept="image/*"
        onChange={(e) => onFileChange(e.target.files[0])}
      />
      <p>Drag & drop or click to upload satellite image</p>
    </div>
  );
}
