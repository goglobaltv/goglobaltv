import React from "react";
import HealthItem from "./HealthItem";
import HealthSlide from "./HealthSlide";

export default function InternationalPage({ allNews }) {
  return (
    <div>
      <HealthSlide allNews={allNews} />
      <HealthItem allNews={allNews} />
    </div>
  );
}
