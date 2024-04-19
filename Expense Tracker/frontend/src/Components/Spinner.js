import React from "react";
import Loading from "./loader.gif";

const Spinner = () => {
  return (
    <div>
      <img
        src={Loading}
        alt="Loading spinner"
        style={{ background: "none", maxWidth: "50px", height: "auto" }}
      />
    </div>
  );
};

export default Spinner;

