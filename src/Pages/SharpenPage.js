import React from "react";
import { useState } from "react";
import axios from "axios";
import fileDownload from "js-file-download";
import b64toBlob from "b64-to-blob";

function SharpenPage() {
  const [displayImagefile, setDisplayImageFile] = useState();
  const [imagefile, setImageFile] = useState();

  function handleChange(e) {
    //console.log(e.target.files);
    setDisplayImageFile(URL.createObjectURL(e.target.files[0]));
    setImageFile(e.target.files[0]);
    //console.log(e.target.files[0]);
  }

  async function uploadFile(event) {
    event.preventDefault();
    let formData = new FormData();
    formData.append("imagefile", imagefile);
    

    axios
      .post("http://localhost:5000/api/circle", formData)
      .then((res) => {
        const data = res.data;
        // console.log(data);
        const blob = b64toBlob(data.b64Data, data.contentType);
        // console.log(blob);

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
        <h2>Add Image:</h2>

        <form encType="multipart/form-data" method="post">
          <input
            type="file"
            name="someExpressFiles"
            multiple="multiple"
            onChange={handleChange}
          />
          <button
            onClick={(event) => {
              uploadFile(event);
            }}
          >
            Upload
          </button>
        </form>
        {displayImagefile ? <img src={displayImagefile} alt="image" /> : null}
      </div>
    </>
  );
}

export default SharpenPage;
