import React from "react";
import NewsBody from "./NewsBody";
import NewsFooter from "./NewsFooter";
import NewsHeader from "./NewsHeader";

const News = ({ info }) => {
  return (
    <>
      <NewsHeader />
      <NewsBody info={info} />
      <NewsFooter />
    </>
  );
};

export default News;
