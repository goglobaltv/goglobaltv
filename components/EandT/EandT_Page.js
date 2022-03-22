import React from "react";
import EandT_Item from "./EandT_Item";
import EandT_Slide from "./EandT_Slide";

export default function EntertainmentPage({ allNews }) {
  // console.log(allNews);
  return (
    <div>
      <EandT_Slide allNews={allNews} />
      <EandT_Item allNews={allNews} />
    </div>
  );
}
