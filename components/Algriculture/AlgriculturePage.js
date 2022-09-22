import React from "react";
import AlgricultureItem from "./AlgricultureItem";
import AlgricultureSlide from "./AlgricultureSlide";

export default function AlgriculturePage({ allNews }) {
  // console.log(allNews)
  return (
    <div>
      <AlgricultureSlide allNews={allNews} />
      <AlgricultureItem allNews={allNews} />
    </div>
  );
}
