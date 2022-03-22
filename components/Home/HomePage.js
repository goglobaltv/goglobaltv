import { Box } from "@chakra-ui/react";
import React from "react";
import CoverSlider from "./CoverSlider";
import DailyNews from "./DailyNews";

export default function HomePage({ allNews }) {
  // console.log(allNews);
  return (
    <div>
      <CoverSlider allNews={allNews} />
      <DailyNews allNews={allNews} />
    </div>
  );
}
