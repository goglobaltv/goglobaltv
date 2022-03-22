import React from "react";
import NewsSlide from "./NewsSlide";
import NewsItem from "./NewsItem";

function NewsPage({ allnews}) {
   console.log(allnews)
  return (
    <div>
      <NewsSlide allnews={allnews}/>
      <NewsItem allnews={ allnews}/>
    </div>
  );
}

export default NewsPage;
