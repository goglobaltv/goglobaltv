import React from "react";
import SportItem from "./SportItem";
import SportSlide from "./SportSlide";

export default function SportPage({ allnews }) {
  // console.log(allnews);
  return (
    <div>
      <SportSlide allnews={allnews} />
      <SportItem allnews={allnews} />
    </div>
  );
}
