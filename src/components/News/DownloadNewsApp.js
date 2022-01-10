import React from "react";
import appstore from "../../assets/appstore.png";
import playstore from "../../assets/playstore.png";

const DownloadNewsApp = () => {
  return (
    <div className="app-wrapper">
      <div>
        <p className="download-text">
          For the best experience use <span>inshorts</span> app on your
          smartphone
        </p>
      </div>
      <div className="store-app">
        <img src={appstore} alt="appstore" />
        <img src={playstore} alt="playstore" />
      </div>
    </div>
  );
};

export default DownloadNewsApp;
