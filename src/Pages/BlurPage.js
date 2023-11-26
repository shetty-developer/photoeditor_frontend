import React from "react";
import { useState } from "react";
import axios from "axios";
import fileDownload from "js-file-download";
import b64toBlob from "b64-to-blob";
import Header from "./Header";
import Footer from "./Footer";

function BlurPage() {
  const [displayImagefile, setDisplayImageFile] = useState();
  const [imagefile, setImageFile] = useState();

  function handleChange(e) {
    setDisplayImageFile(URL.createObjectURL(e.target.files[0]));
    setImageFile(e.target.files[0]);
  }

  async function uploadFile(event) {
    event.preventDefault();
    let formData = new FormData();
    formData.append("imagefile", imagefile);

    axios
      .post("http://localhost:5000/api/circle", formData)
      .then((res) => {
        const data = res.data;

        const blob = b64toBlob(data.b64Data, data.contentType);

        const fileNameAndExt = imagefile.name.split(".");

        fileDownload(blob, `${fileNameAndExt[0]}-resized.${fileNameAndExt[1]}`);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div>
      <Header></Header>
      <h1>Blur the image</h1>

      <h2>Compress the image with the best quality</h2>

      <form encType="multipart/form-data" method="post">
        <label for="image_uploads">Choose images to upload</label>
        <input
          type="file"
          id="image_uploads"
          name="someExpressFiles"
          multiple="multiple"
          onChange={handleChange}
        />
        <button
          onClick={(event) => {
            uploadFile(event);
          }}
        >
          Blur the image
        </button>
      </form>
      {displayImagefile ? <img src={displayImagefile} /> : null}

     <Footer></Footer>
    </div>
  );
}

export default BlurPage;
