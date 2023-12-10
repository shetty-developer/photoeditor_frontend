import React from "react";
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { useState } from "react";
import axios from "axios";
import fileDownload from "js-file-download";
import b64toBlob from "b64-to-blob";


function CropPage() {

  const [crop, setCrop] = useState(null);
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [x, setX] = useState('');
  const [y,setY] = useState('');

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
      .post("http://localhost:5000/api/crop", formData)
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
      <form encType="multipart/form-data" method="post">
        <label>Choose images to upload</label>
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
          Crop the image
        </button>
      </form>

      <ReactCrop
        src={displayImagefile}
        crop={crop}
        onChange={c => {
          setCrop(c);
        }}
        onComplete={(e) => {
          console.log(e);
        }}
      >
        <img src={displayImagefile} />
      </ReactCrop>


    </div>

  )
}

export default CropPage;