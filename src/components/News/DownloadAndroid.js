import React from "react";
import playstore from "../../assets/playstore.png";

const DownloadAndroid = () => {
  return (
    <div className="download-android">
      <div>
        <p className="download-app-text">
          For the best experience use <span>inshorts</span> app on your
          smartphone
        </p>
      </div>
      <div className="android-app">
        <img src={playstore} alt="playstore" />
      </div>
    </div>
  );
};

export default DownloadAndroid;
