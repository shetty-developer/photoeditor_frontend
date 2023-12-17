import { useState, useRef, useEffect } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";

import { canvasPreview } from "../service/CropService";

export default function CropPage({ url }) {
  const imgRef = useRef(null);
  const [crop, setCrop] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [completedCrop, setCompletedCrop] = useState();
  const imageUrl = url;

  const [displayImagefile, setDisplayImageFile] = useState();
  const [imagefile, setImageFile] = useState();

  function handleChange(e) {
    setDisplayImageFile(URL.createObjectURL(e.target.files[0]));
    setImageFile(e.target.files[0]);
  }

  const onZoom = (e) => {
    setScale(parseFloat(e));
  };

  const download = async () => {
    await canvasPreview(imgRef.current, completedCrop, scale, rotation);
  };
  const onImageLoad = (e) => {
    setHeight(e?.currentTarget?.height);
    setWidth(e?.currentTarget?.width);
    setCompletedCrop({
      x: 0,
      y: 0,
      height: e?.currentTarget?.height,
      width: e?.currentTarget?.width,
      unit: "px",
    });
  };
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
        <div className="crop-image-style">
          <ReactCrop
            src={imagefile}
            crop={crop}
            onChange={(_, percentCrop) => {
              setCrop(percentCrop);
            }}
            onComplete={(e) => {
              if (e?.height == 0 || e?.width == 0) {
                setCompletedCrop({
                  x: 0,
                  y: 0,
                  height: height,
                  width: width,
                  unit: "px",
                });
              } else {
                setCompletedCrop(e);
              }
            }}
          >
            <img
            
              ref={imgRef}
              crossorigin="anonymous"
              src={displayImagefile}
              style={{ transform: `scale(${scale}) rotate(${rotation}deg)` }}
              onLoad={onImageLoad}
            />
          </ReactCrop>
        </div>
      ) : null}

      <div className={"controls"}>
        <input
          type="range"
          min={0.1}
          max={3}
          step={0.05}
          value={scale}
          onInput={(e) => {
            onZoom(e.target.value);
          }}
          className={"slider"}
        ></input>
        <span className={"rangeText"}>Zoom In/Out</span>
      </div>

      {displayImagefile ? (
        <button className="upload-files-button" onClick={download}>
          Upload
        </button>
      ) : null}

      <Footer></Footer>
    </div>
  );
}
