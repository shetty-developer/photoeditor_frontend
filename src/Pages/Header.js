import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Header() {
  let navigate = useNavigate();
  return (
    <div>
      <div className="header-style">
        <div
          className="app-logo"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={""} alt="logo of the image" className="img-logo"></img>
        </div>

        <div className="menu-margin"></div>
        <div
          className="app-name"
          onClick={() => {
            navigate("/");
          }}
        >
          Photo editor app
        </div>
        <div className="menu-margin"></div>
        <div
          className="home-button"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </div>

        <div className="menu-margin"></div>

        <div
          className="about-button"
          onClick={() => {
            navigate("/about");
          }}
        >
          About Us
        </div>

        <div className="menu-margin"></div>

        <div
          className="tools-button"
          onClick={() => {
            navigate("/blur");
          }}
        >
          Tools
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default Header;
