import React from "react";
import BusinessItem from "./BusinessItem";
import BusinessSlide from "./BusinessSlide";

export default function BusinessPage({ allNews }) {
  return (
    <div>
      <BusinessSlide allNews={allNews} />
      <BusinessItem allNews={allNews} />
    </div>
  );
}
