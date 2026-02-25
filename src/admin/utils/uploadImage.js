import imageCompression from "browser-image-compression";

/*
-----------------------------------
Cloudinary Config
-----------------------------------
*/

const CLOUD_NAME = "dycpl32ti";
const UPLOAD_PRESET = "boutique_upload";

/*
-----------------------------------
Upload Image Function
-----------------------------------
*/

export const uploadImage = async (file, setProgress) => {

  try {

    if (!file) return null;

    /*
    -----------------------------
    Image Compression
    -----------------------------
    Works perfectly on mobile too
    */

    const compressedFile =
      await imageCompression(file, {
        maxSizeMB: 1,
        maxWidthOrHeight: 1600,
        useWebWorker: true
      });

    /*
    -----------------------------
    Form Data
    -----------------------------
    */

    const formData = new FormData();

    formData.append("file", compressedFile);
    formData.append("upload_preset", UPLOAD_PRESET);

    /*
    -----------------------------
    Upload using XMLHttpRequest
    (needed for progress bar)
    -----------------------------
    */

    return new Promise((resolve, reject) => {

      const xhr = new XMLHttpRequest();

      xhr.open(
        "POST",
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
      );

      /*
      -----------------------------
      Upload Progress
      -----------------------------
      */

      xhr.upload.onprogress = (event) => {

        if (event.lengthComputable && setProgress) {

          const percent =
            Math.round(
              (event.loaded / event.total) * 100
            );

          setProgress(percent);
        }
      };

      /*
      -----------------------------
      Success
      -----------------------------
      */

      xhr.onload = () => {

        if (xhr.status === 200) {

          const response =
            JSON.parse(xhr.response);

          resolve(response.secure_url);

        } else {

          reject("Upload failed");
        }
      };

      /*
      -----------------------------
      Error
      -----------------------------
      */

      xhr.onerror = () => {
        reject("Network Error");
      };

      xhr.send(formData);

    });

  } catch (error) {

    console.error("Image Upload Error:", error);

    alert("Image upload failed");

    return null;
  }
};