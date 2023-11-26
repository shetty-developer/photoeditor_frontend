import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function HomePage() {
  let navigate = useNavigate();
  return (
    <div>
      <Header></Header>
      <hr></hr>
      <h2>The ultimate tool for all edits</h2>
      <div
        className="all-button-container"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div
          className="first-button-component"
          style={{
            width: "200px",
            height: "120px",
            backgroundColor: "papayawhip",
          }}
          onClick={() => {
            navigate("/blur");
          }}
        >
          <img className="button-icon" src={""} alt="img icon"></img>

          <h3>Blur Image</h3>

          <h6>Compress Jpg ,png ,svg and theory</h6>
        </div>

        <div className="margin" style={{ marginLeft: "30px" }}></div>
        <div
          className="second-button-component"
          style={{
            width: "200px",
            height: "120px",
            backgroundColor: "papayawhip",
          }}
          onClick={() => {
            navigate("/compressjpegimage");
          }}
        >
          <img className="button-icon" src={""} alt="img icon"></img>

          <h3>Compress Jpeg</h3>

          <h6>Compress Jpg ,png ,svg and theory</h6>
        </div>

        <div className="margin" style={{ marginLeft: "30px" }}></div>

        <div
          className="third-button-component"
          style={{
            width: "200px",
            height: "120px",
            backgroundColor: "papayawhip",
          }}
          onClick={() => {
            navigate("/compresspngimage");
          }}
        >
          <img className="button-icon" src={""} alt="img icon"></img>

          <h3>Compress Png</h3>

          <h6>Compress Jpg ,png ,svg and theory</h6>
        </div>
        <div className="margin" style={{ marginLeft: "30px" }}></div>
      </div>

      <div
        className="space-break"
        style={{ marginTop: "30px", marginBottom: "30px" }}
      ></div>
      <div
        className="second-row"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div
          className="fourth-button-component"
          style={{
            width: "200px",
            height: "120px",
            backgroundColor: "papayawhip",
          }}
          onClick={() => {
            navigate("/compresswebpimage");
          }}
        >
          <img className="button-icon" src={""} alt="img icon"></img>

          <h3>Compress Webp</h3>

          <h6>Compress Jpg ,png ,svg and theory</h6>
        </div>

        <div className="margin" style={{ marginLeft: "30px" }}></div>

        <div
          className="fifth-button-component"
          style={{
            width: "200px",
            height: "120px",
            backgroundColor: "papayawhip",
          }}
          onClick={() => {
            navigate("/compressgifimage");
          }}
        >
          <img className="button-icon" src={""} alt="img icon"></img>

          <h3>Compress Gif</h3>

          <h6>Compress Jpg ,png ,svg and theory</h6>
        </div>

        <div className="margin" style={{ marginLeft: "30px" }}></div>

        <div
          className="sixth-button-component"
          style={{
            width: "200px",
            height: "120px",
            backgroundColor: "papayawhip",
          }}
          onClick={() => {
            navigate("/convertjpegimage");
          }}
        >
          <img className="button-icon" src={""} alt="img icon"></img>

          <h3>Convert Jpeg</h3>

          <h6>Compress Jpg ,png ,svg and theory</h6>
        </div>

        <div className="margin" style={{ marginLeft: "30px" }}></div>
      </div>

      <div
        className="line-break"
        style={{ marginTop: "30px", marginBottom: "30px" }}
      ></div>
      <div
        className="third-row"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div
          className="seventh-button-component"
          style={{
            width: "200px",
            height: "120px",
            backgroundColor: "papayawhip",
          }}
          onClick={() => {
            navigate("/convertpngimage");
          }}
        >
          <img className="button-icon" src={""} alt="img icon"></img>

          <h3>Convert Png</h3>

          <h6>Compress Jpg ,png ,svg and theory</h6>
        </div>

        <div className="margin" style={{ marginLeft: "30px" }}></div>

        <div
          className="eighth-button-component"
          style={{
            width: "200px",
            height: "120px",
            backgroundColor: "papayawhip",
          }}
          onClick={() => {
            navigate("/convertwebpimage");
          }}
        >
          <img className="button-icon" src={""} alt="img icon"></img>

          <h3>Convert Webp</h3>

          <h6>Compress Jpg ,png ,svg and theory</h6>
        </div>

        <div className="margin" style={{ marginLeft: "30px" }}></div>

        <div
          className="ninth-button-component"
          style={{
            width: "200px",
            height: "120px",
            backgroundColor: "papayawhip",
          }}
          onClick={() => {
            navigate("/convertgifimage");
          }}
        >
          <img className="button-icon" src={""} alt="img icon"></img>

          <h3>Convert Gif </h3>

          <h6>Compress Jpg ,png ,svg and theory</h6>
        </div>

        <div className="margin" style={{ marginLeft: "30px" }}></div>
      </div>

      <div
        className="line-break"
        style={{ marginTop: "30px", marginBottom: "30px" }}
      ></div>
      <div
        className="fourth-row"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div
          className="tenth-button-component"
          style={{
            width: "200px",
            height: "120px",
            backgroundColor: "papayawhip",
          }}
          onClick={() => {
            navigate("/crop");
          }}
        >
          <img className="button-icon" src={""} alt="img icon"></img>

          <h3>Crop image</h3>

          <h6>Compress Jpg ,png ,svg and theory</h6>
        </div>

        <div className="margin" style={{ marginLeft: "30px" }}></div>

        <div
          className="eleven-button-component"
          style={{
            width: "200px",
            height: "120px",
            backgroundColor: "papayawhip",
          }}
          onClick={() => {
            navigate("/resize");
          }}
        >
          <img className="button-icon" src={""} alt="img icon"></img>

          <h3>Resize </h3>

          <h6>Compress Jpg ,png ,svg and theory</h6>
        </div>

        <div className="margin" style={{ marginLeft: "30px" }}></div>

        <div
          className="twelve-button-component"
          style={{
            width: "200px",
            height: "120px",
            backgroundColor: "papayawhip",
          }}
          onClick={() => {
            navigate("/rotate");
          }}
        >
          <img className="button-icon" src={""} alt="img icon"></img>

          <h3>Roatate</h3>

          <h6>Compress Jpg ,png ,svg and theory</h6>
        </div>

        <div className="margin" style={{ marginLeft: "30px" }}></div>
      </div>

      <div
        className="line-break"
        style={{ marginTop: "30px", marginBottom: "30px" }}
      ></div>
      <div
        className="fifth-row"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div
          className="thirteen-button-component"
          style={{
            width: "200px",
            height: "120px",
            backgroundColor: "papayawhip",
          }}
          onClick={() => {
            navigate("/sharpen");
          }}
        >
          <img className="button-icon" src={""} alt="img icon"></img>

          <h3>Sharpen </h3>

          <h6>Compress Jpg ,png ,svg and theory</h6>
        </div>

        <div className="margin" style={{ marginLeft: "30px" }}></div>

        <div
          className="fifteen-button-component"
          style={{
            width: "200px",
            height: "120px",
            backgroundColor: "papayawhip",
          }}
          onClick={() => {
            navigate("/socialmedia");
          }}
        >
          <img className="button-icon" src={""} alt="img icon"></img>

          <h3>Social media </h3>

          <h6>Compress Jpg ,png ,svg and theory</h6>
        </div>

        <div className="margin" style={{ marginLeft: "30px" }}></div>

        <div
          className="fourteen-button-component"
          style={{
            width: "200px",
            height: "120px",
            backgroundColor: "papayawhip",
          }}
          onClick={() => {
            navigate("/watermark");
          }}
        >
          <img className="button-icon" src={""} alt="img icon"></img>

          <h3>Watermark image</h3>

          <h6>Compress Jpg ,png ,svg and theory</h6>
        </div>
        <div className="margin" style={{ marginLeft: "30px" }}></div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default HomePage;
