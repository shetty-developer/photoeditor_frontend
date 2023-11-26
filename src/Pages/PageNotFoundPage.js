import React from "react";

function PageNotFoundpage() {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "10px",
      }}
    >
      <h2 style={{ fontSize: "40px" }}> 404 || Page Not Found Error</h2>
    </div>
  );
}

export default PageNotFoundpage;
