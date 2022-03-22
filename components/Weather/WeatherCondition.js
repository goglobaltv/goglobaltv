import React from "react";
import { Box, Flex, Image, Spacer, Center } from "@chakra-ui/react";

export const WeatherIcons = {
  "01d": "../icons-weather/sunny.svg",
  "01n": "../icons-weather/night.svg",
  "02d": "../icons-weather/day.svg",
  "02n": "../icons-weather/cloudy-night.svg",
  "03d": "../icons-weather/cloudy.svg",
  "03n": "../icons-weather/cloudy.svg",
  "04d": "../icons-weather/perfect-day.svg",
  "04n": "../icons-weather/cloudy-night.svg",
  "09d": "../icons-weather/rain.svg",
  "09n": "../icons-weather/rain-night.svg",
  "10d": "../icons-weather/rain.svg",
  "10n": "../icons-weather/rain-night.svg",
  "11d": "../icons-weather/storm.svg",
  "11n": "../icons-weather/storm.svg",
};
const tempSize = {
  sm: "26px",
  md: "14px",
  lg: "18px",
  xl: "18px",
  "2xl": "28px",
};
const cloudSize = {
  sm: "14px",
  md: "11px",
  lg: "12px",
  xl: "12px",
  "2xl": "14px",
};

const tempPr = {
  sm: "10px",
  md: "10px",
  lg: "0px",
  xl: "5px",
  "2xl": "5px",
};
const weatherIconSize = {
  sm: "80px",
  md: "40px",
  lg: "70px",
  xl: "70px",
  "2xl": "80px",
};
const flex = {
  base: "flex",
  md: "block",
  lg: "block",
  xl: "flex",
  "2xl": "flex",
};
const tempMt = {
  sm: "10%",
  md: "10%",
  lg: "10%",
  xl: "0%",
  "2xl": "5%",
};

const spacerW = {
  base: "40px",
  sm: "0px",
  md: "0px",
  lg: "0px",
  xl: "0px",
  "2xl": "50px",
};

function WeatherCondition({ temp, des, icon }) {
  return (
    <Box display="flex">
      <Box alignItems="center" mt={tempMt} fontSize={cloudSize} display={flex}>
        <Box fontSize={tempSize} fontWeight="bold" pr={tempPr}>
          {temp} °C
        </Box>
        | {des}
      </Box>

      <Spacer w={spacerW} />

      <Image
        w={weatherIconSize}
        m="20px"
        src={WeatherIcons[icon]}
        alt="weather icon"
        display="inline-block"
      />
    </Box>
  );
}

export default WeatherCondition;
