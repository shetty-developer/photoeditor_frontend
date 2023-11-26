import React from "react";
import { useState } from "react";
import axios from "axios";
import fileDownload from "js-file-download";
import b64toBlob from "b64-to-blob";
import "../App.css";

function ResizePage() {
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
      .post("http://localhost:5000/api/resize", formData)
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
    <>
      <div className="App">
        <h1>Resize </h1>
        
        {displayImagefile ? null : (
          <form encType="multipart/form-data" method="post">
           <div>
            <input
              type="file"
              className="choose-btn"
              name="someExpressFiles"
              multiple="multiple"
              onChange={handleChange}
            />
          </div>
          </form>
        )}

        
        {displayImagefile ? (
          <img src={displayImagefile} alt="not loaded" />
        ) : null}

        <br></br>

        {displayImagefile ? (
          <button className="upload-btn"
            onClick={(event) => {
              uploadFile(event);
            }}
          >
            Upload
          </button>
        ) : null}
      </div>
    </>
  );
}

export default ResizePage;
