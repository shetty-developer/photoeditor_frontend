import React from "react";
import { useState } from "react";
import axios from "axios";
import fileDownload from "js-file-download";
import b64toBlob from "b64-to-blob";

function RotatePage() {
  const [displayImagefile, setDisplayImageFile] = useState();
  const [imagefile, setImageFile] = useState();
  const [roatatedegree, setRotateDegree] = useState("0deg");

  function handleChange(e) {

    setDisplayImageFile(URL.createObjectURL(e.target.files[0]));
    setImageFile(e.target.files[0]);

  }

  async function uploadFile(event) {
    event.preventDefault();
    let formData = new FormData();
    formData.append("imagefile", imagefile);
    formData.append("rotatedegree",roatatedegree);

    axios
      .post("http://localhost:5000/api/rotate", formData)
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

        <button onClick={(event) => {
          rotateZeroDegree(event);
        }}>Roatate 0 Degree</button>

        <button onClick={(event) => {
          rotateNinetyDegree(event);
        }}>Roatate 90 Degree</button>



        <button onClick={(event) => {
          rotateOneeightyDegree(event);
        }}>Rotate 180 degree</button>



        <button onClick={(event) => {
          rotateTwoseventyDegree(event);
        }}>Rotate 270 degree</button>


        {displayImagefile ? <img src={displayImagefile} alt="image" /> : null}

        <h3>After rotation pic</h3>


        {displayImagefile ? <img style={{
          transform: `rotate(${roatatedegree})`
        }} src={displayImagefile} alt="image" /> : null}

      </div>
    </>
  );
}

export default RotatePage;
