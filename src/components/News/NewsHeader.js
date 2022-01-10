import React from "react";
import inshort from "../../assets/logo_inshorts.png";

const NewsHeader = () => {
  return (
    <div className="header-wrapper">
      <div className="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className="image-wrapper">
        <img src={inshort} alt="inshort" className="logo" />
      </div>
    </div>
  );
};

export default NewsHeader;
