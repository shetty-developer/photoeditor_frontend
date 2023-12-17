import React from "react";
import { useState } from "react";
import axios from "axios";
import fileDownload from "js-file-download";
import b64toBlob from "b64-to-blob";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";

function SharpenPage() {
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

        fileDownload(blob, `${fileNameAndExt[0]}-imgeditortool.${fileNameAndExt[1]}`);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div>
      <Header></Header>

      <div className="tool-header">Compress Gif</div>

      <div className="tool-description">Compress Gif with the compression.</div>
      <div className="tool-form">
        <form encType="multipart/form-data" method="post">
          <input
            type="file"
            name="someExpressFiles"
            multiple="multiple"
            onChange={handleChange}
          />
        </form>
      </div>

      {displayImagefile ? (
        <img
          className="display-image"
          src={displayImagefile}
          alt="not loaded"
        />
      ) : null}

      {displayImagefile ? (
        <button
          className="upload-files-button"
          onClick={(event) => {
            uploadFile(event);
          }}
        >
          Upload
        </button>
      ) : null}

      <Footer></Footer>
    </div>
  );
}

export default SharpenPage;
