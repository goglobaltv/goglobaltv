import React from "react";
import SportItem from "./SportItem";
import SportSlide from "./SportSlide";

export default function SportPage({ allNews }) {
  return (
    <div>
      <SportSlide allNews={allNews} />
      <SportItem allNews={allNews} />
    </div>
  );
}
