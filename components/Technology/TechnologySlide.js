import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Center, Flex, Image } from "@chakra-ui/react";
import CoverCard from "../CoverCard";

export default function TechnologySlide({ allNews }) {
  console.log(allNews, "Technology");
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 1400,
    autoSpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          //
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const width = {
    base: "95%",
    md: "90%",
    lg: "85%",
    "2xl": "70%",
  };
  return (
    <Center>
      <Box w={width} mt="20px">
        <Slider {...settings}>
          {allNews
            ?.filter((newData) => newData?.newsCategory?.name === "Technology")
            .map((newData) => (
              <CoverCard key={newData?._id} newData={newData} />
            ))}
        </Slider>
      </Box>
    </Center>
  );
}
