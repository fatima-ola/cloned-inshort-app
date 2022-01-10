import React from "react";
import DownloadNewsApp from "./DownloadNewsApp";

import NewsList from "./NewsList";

const NewsBody = ({ info }) => {
  return (
    <div className="news-wrapper">
      <div className="news-body">
        <div>
          <DownloadNewsApp />
          {info.articles &&
            info.articles.map((file) => (
              <div>
                <NewsList
                  title={file.title}
                  describe={file.description}
                  author={file.author}
                  inshortlink={file.inshorts_link}
                  image={file.image}
                  time={file.timestamp}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default NewsBody;
