import React, { useEffect, useState } from "react";
import News from "./components/News/News";
import "./index.css";

const App = () => {
  const [allDatas, setAllDatas] = useState([]);

  const newsurl = "https://inshorts.vercel.app/news?category=all";
  // const loadData = await fetch (newsurl)
  //   const response = await loadData.json();
  //   setAllData(response);
  //   console.log(response);
  // };
  // const loadData = async () => {
  //   const response = await fetch(newsurl);
  //   const data = await response.json();
  //   setAllData(data);
  //   console.log(data);
  // };

  useEffect(() => {
    fetch(newsurl)
      .then((response) => response.json())
      .then((data) => setAllDatas(data));
  }, []);

  return <News info={allDatas} />;
};

export default App;
