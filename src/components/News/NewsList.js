import React from "react";
import Card from "../UI/Card";

const NewsList = (props) => {
  return (
    <Card>
      <div className="image-container">
        <img src={props.image} alt="caption-news" />
      </div>
      <div className="news-container">
        <p>{props.title}</p>
        <p>{props.describe}</p>
      </div>
    </Card>
  );
};

export default NewsList;
