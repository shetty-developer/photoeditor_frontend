import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import "../App.css";

function HomePage() {
  let navigate = useNavigate();
  return (
    <div className="Homepage-style">
      <h2>The ultimate tool for all edits</h2>
      <div className="first-row">
        <div
          className="homepage-button-components"
          onClick={() => {
            navigate("/blur");
          }}
        >
          <img className="button-icon" src={""} alt="img icon"></img>

          <h3>Blur Image</h3>

          <h6>Compress Jpg ,png ,svg and theory</h6>
        </div>

        <div className="space-between-component"></div>
        <div
          className="homepage-button-components"
          onClick={() => {
            navigate("/compressjpegimage");
          }}
        >
          <img className="button-icon" src={""} alt="img icon"></img>

          <h3>Compress Jpeg</h3>

          <h6>Compress Jpg ,png ,svg and theory</h6>
        </div>

        <div className="space-between-component"></div>

        <div
          className="homepage-button-components"
          onClick={() => {
            navigate("/compresspngimage");
          }}
        >
          <img className="button-icon" src={""} alt="img icon"></img>

          <h3>Compress Png</h3>

          <h6>Compress Jpg ,png ,svg and theory</h6>
        </div>
        <div className="space-between-component"></div>
      </div>

      <div className="row-space-break"></div>
      <div className="second-row">
        <div
          className="homepage-button-components"
          onClick={() => {
            navigate("/compresswebpimage");
          }}
        >
          <img className="button-icon" src={""} alt="img icon"></img>

          <h3>Compress Webp</h3>

          <h6>Compress Jpg ,png ,svg and theory</h6>
        </div>

        <div className="space-between-component"></div>

        <div
          className="homepage-button-components"
          onClick={() => {
            navigate("/compressgifimage");
          }}
        >
          <img className="button-icon" src={""} alt="img icon"></img>

          <h3>Compress Gif</h3>

          <h6>Compress Jpg ,png ,svg and theory</h6>
        </div>

        <div className="space-between-component"></div>

        <div
          className="homepage-button-components"
          onClick={() => {
            navigate("/convertjpegimage");
          }}
        >
          <img className="button-icon" src={""} alt="img icon"></img>

          <h3>Convert Jpeg</h3>

          <h6>Compress Jpg ,png ,svg and theory</h6>
        </div>

        <div className="space-between-component"></div>
      </div>

      <div className="row-space-break"></div>
      <div className="third-row">
        <div
          className="homepage-button-components"
          onClick={() => {
            navigate("/convertpngimage");
          }}
        >
          <img className="button-icon" src={""} alt="img icon"></img>

          <h3>Convert Png</h3>

          <h6>Compress Jpg ,png ,svg and theory</h6>
        </div>

        <div className="space-between-component"></div>

        <div
          className="homepage-button-components"
          onClick={() => {
            navigate("/convertwebpimage");
          }}
        >
          <img className="button-icon" src={""} alt="img icon"></img>

          <h3>Convert Webp</h3>

          <h6>Compress Jpg ,png ,svg and theory</h6>
        </div>

        <div className="space-between-component"></div>

        <div
          className="homepage-button-components"
          onClick={() => {
            navigate("/convertgifimage");
          }}
        >
          <img className="button-icon" src={""} alt="img icon"></img>

          <h3>Convert Gif </h3>

          <h6>Compress Jpg ,png ,svg and theory</h6>
        </div>

        <div className="space-between-component"></div>
      </div>

      <div className="row-space-break"></div>
      <div className="fourth-row">
        <div
          className="homepage-button-components"
          onClick={() => {
            navigate("/crop");
          }}
        >
          <img className="button-icon" src={""} alt="img icon"></img>

          <h3>Crop image</h3>

          <h6>Compress Jpg ,png ,svg and theory</h6>
        </div>

        <div className="space-between-component"></div>

        <div
          className="homepage-button-components"
          onClick={() => {
            navigate("/resize");
          }}
        >
          <img className="button-icon" src={""} alt="img icon"></img>

          <h3>Resize </h3>

          <h6>Compress Jpg ,png ,svg and theory</h6>
        </div>

        <div className="space-between-component"></div>

        <div
          className="homepage-button-components"
          onClick={() => {
            navigate("/rotate");
          }}
        >
          <img className="button-icon" src={""} alt="img icon"></img>

          <h3>Roatate</h3>

          <h6>Compress Jpg ,png ,svg and theory</h6>
        </div>

        <div className="space-between-component"></div>
      </div>

      <div className="row-space-break"></div>
      <div className="fifth-row">
        <div
          className="homepage-button-components"
          onClick={() => {
            navigate("/sharpen");
          }}
        >
          <img className="button-icon" src={""} alt="img icon"></img>

          <h3>Sharpen </h3>

          <h6>Compress Jpg ,png ,svg and theory</h6>
        </div>

        <div className="space-between-component"></div>

        <div
          className="homepage-button-components"
          onClick={() => {
            navigate("/socialmedia");
          }}
        >
          <img className="button-icon" src={""} alt="img icon"></img>

          <h3>Social media </h3>

          <h6>Compress Jpg ,png ,svg and theory</h6>
        </div>

        <div className="space-between-component"></div>

        <div
          className="homepage-button-components"
          onClick={() => {
            navigate("/watermark");
          }}
        >
          <img className="button-icon" src={""} alt="img icon"></img>

          <h3>Watermark image</h3>

          <h6>Compress Jpg ,png ,svg and theory</h6>
        </div>
        <div className="space-between-component"></div>
      </div>
    </div>
  );
}

export default HomePage;
