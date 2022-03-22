import React from "react";
import TechnologyItem from "./TechnologyItem";
import TechnologySlide from "./TechnologySlide";

export default function TechnologyPage({ allNews }) {
  return (
    <div>
      <TechnologySlide allNews={allNews} />
      <TechnologyItem allNews={allNews} />
    </div>
  );
}
