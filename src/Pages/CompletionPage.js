import React from "react";

import Header from "./Header";

import Footer from "./Footer";

import "../App.css";

function CompletionPage(props) {
  return (
    <div>
      <Header></Header>

      <div className="completion-greeting">Thanks for using our tool!</div>

      <div className="completion-header">
        Your images are {props.toolname ? props.toolname : null}
      </div>

      <div className="completion-description">
        Please check your download folder!
      </div>

      <Footer></Footer>
    </div>
  );
}

export default CompletionPage;
