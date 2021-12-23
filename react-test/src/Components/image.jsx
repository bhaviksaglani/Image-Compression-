import React, { useState } from "react";
import imageCompression from "browser-image-compression";
import imageToBase64 from "image-to-base64/browser";
import { base64StringToBlob } from "blob-util";
import { Image } from "semantic-ui-react";
import { saveAs } from "file-saver";
import "../App.css";

const ImageApp = () => {
  const [image, setImage] = useState("");
  const [compressedImage, setCompressedImage] = useState("");

  const updateImage = (e) => {
    const imageShow = e.target.value;
    setImage(imageShow);
  };

  let compressFile;
  const handleCompressImage = (e) => {
    e.preventDefault();
    const options = {
      // Compression Option of Image
      maxSizeMB: 500000000,

      maxWidthOrHeight: 300,
    };
    // Image to Base64 Conversion
    imageToBase64(image).then((baseData) => {
      // Base64 String to Blob File
      const blob = base64StringToBlob(baseData, "image/jpeg");

      // Compression Of Image
      imageCompression(blob, options).then((x) => {
        compressFile = x;

        console.log(compressFile);
        const downloadLink = URL.createObjectURL(compressFile);
        setCompressedImage(downloadLink);
      });
    });
  };
  // Download the Compressed Image
  const saveFile = (e) => {
    e.preventDefault();
    saveAs(compressedImage, "example.jpeg");
  };
  return (
    <div className="App">
      <form className="form">
        <input
          className="Image"
          id="image"
          type="text"
          // image={image}
          onChange={updateImage}
          placeholder="URL Of Image"
        />
      </form>
      <div id="download">
        <img src={image} />
      </div>
      <div>
        <button className="download-button" onClick={handleCompressImage}>
          compress
        </button>
        <div>
          <Image src={compressedImage}></Image>
        </div>

        <button className="download-button" onClick={saveFile}>
          download
        </button>
      </div>
    </div>
  );
};

export default ImageApp;
