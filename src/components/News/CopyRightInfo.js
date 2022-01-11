import React from 'react';
import FooterLogo from "../../assets/logo_footer.png";

const CopyRightInfo = () => {
    return (
        <div className="copyright">
          <div className="copyright-logo">
            <img src={FooterLogo} alt="BigCo Inc. logo" />
          </div>
          <div className="copyright-text">
            <p>
              {" "}
              <span className="f-text-bold">inshorts</span> medialabs pvt. ltd.
              ©COPYRIGHT 2022
            </p>
          </div>
        </div>
      );
}

export default CopyRightInfo



