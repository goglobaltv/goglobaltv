import React from "react";
import InternationalItem from "./InternationalItem";
import InternationalSlide from "./InternationalSlide";

export default function InternationalPage({ allNews }) {
  return (
    <div>
      <InternationalSlide allNews={allNews} />
      <InternationalItem allNews={allNews} />
    </div>
  );
}
