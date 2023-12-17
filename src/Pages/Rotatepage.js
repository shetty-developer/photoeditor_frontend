import React from "react";
import { useState } from "react";
import axios from "axios";
import fileDownload from "js-file-download";
import b64toBlob from "b64-to-blob";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";

function RotatePage() {
  const [displayImagefile, setDisplayImageFile] = useState();
  const [imagefile, setImageFile] = useState();
  const [rotateDegree, setRotateDegree] = useState("0deg");

  function handleChange(e) {
    setDisplayImageFile(URL.createObjectURL(e.target.files[0]));
    setImageFile(e.target.files[0]);
  }

  async function uploadFile(event) {
    event.preventDefault();
    let formData = new FormData();
    formData.append("imagefile", imagefile);
    formData.append("rotatedegree", rotateDegree);

    axios
      .post("http://localhost:5000/api/circle", formData)
      .then((res) => {
        const data = res.data;

        const blob = b64toBlob(data.b64Data, data.contentType);

        const fileNameAndExt = imagefile.name.split(".");

        fileDownload(
          blob,
          `${fileNameAndExt[0]}-imgeditortool.${fileNameAndExt[1]}`
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function rotateZeroDegree(event) {
    setRotateDegree("0deg");
  }

  function rotateNinetyDegree(event) {
    setRotateDegree("90deg");
  }

  function rotateOneeightyDegree(event) {
    setRotateDegree("180deg");
  }

  function rotateTwoseventyDegree(event) {
    setRotateDegree("270deg");
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

      <button
        onClick={(event) => {
          rotateZeroDegree(event);
        }}
      >
        Roatate 0 Degree
      </button>

      <button
        onClick={(event) => {
          rotateNinetyDegree(event);
        }}
      >
        Roatate 90 Degree
      </button>

      <button
        onClick={(event) => {
          rotateOneeightyDegree(event);
        }}
      >
        Rotate 180 degree
      </button>

      <button
        onClick={(event) => {
          rotateTwoseventyDegree(event);
        }}
      >
        Rotate 270 degree
      </button>

      {displayImagefile ? (
        <img
          className="display-image"
          src={displayImagefile}
          alt="not loaded"
        />
      ) : null}

      {displayImagefile ? <h3>After the image rotation</h3> : null}

      {displayImagefile ? (
        <img
          className="display-image"
          style={{
            transform: `rotate(${rotateDegree})`,
          }}
          src={displayImagefile}
          alt="image"
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

export default RotatePage;
