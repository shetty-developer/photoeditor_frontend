import React from "react";

import Header from "./Header";

import Footer from "./Footer";

function CompletionPage(props) {
  return (
    <div>
      <Header></Header>
      <h1>Your images are {props.toolname ? props.toolname : null}</h1>

      <h6>Please share the tool in the social media</h6>

      <h6>Trusted tool</h6>

      <Footer></Footer>
    </div>
  );
}

export default CompletionPage;
