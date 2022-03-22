import React from "react";
import NationalItem from "./NationalItem";
import NationalSlide from "./NationalSlide";

export default function NationalPage({ allNews }) {
  return (
    <div>
      <NationalSlide allNews={allNews} />
      <NationalItem allNews={allNews} />
    </div>
  );
}
