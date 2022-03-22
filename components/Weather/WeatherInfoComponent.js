import { Box, Center, Flex, Spacer, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import WeatherCondition from "./WeatherCondition";

function WeatherInfoComponent({ weather }) {
  const isDay = weather?.weather[0].icon?.includes("d");
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };

  const WeatherInfoIcons = {
    sunrise: "../icons-weather/temp.svg",
    humidity: "../icons-weather/humidity.svg",
    wind: "../icons-weather/wind.svg",
    pressure: "../icons-weather/pressure.svg",
  };

  const citySize = {
    sm: "18px",
    md: "17px",
    lg: "19px",
    xl: "19px",
    "2xl": "24px",
  };
  const weatherInfoSize = {
    sm: "14px",
    md: "12px",
    lg: "13px",
    xl: "13px",
    "2xl": "16px",
  };
  const weatherInfoMl = {
    sm: "5px",
    md: "10px",
    lg: "0px",
    xl: "0px",
    "2xl": "0px",
  };
  const weatherInfoIconSize = {
    sm: "45px",
    md: "35px",
    lg: "35px",
    xl: "35px",
    "2xl": "45px",
  };
  const weatherInfoTextSize = {
    sm: "14px",
    md: "11px",
    lg: "12px",
    xl: "12px",
    "2xl": "14px",
  };
  const pressureIconSize = {
    sm: "40px",
    md: "30px",
    lg: "30px",
    xl: "30px",
    "2xl": "45px",
  };
  const w_weatherInfo = {
    base: "300px",
    md: "200px",
    lg: "200px",
    xl: "280px",
    "2xl": "300px",
  };

  return (
    <div>
      <WeatherCondition
        temp={Math.floor(weather?.main?.temp - 273)}
        icon={weather?.weather[0].icon}
        des={weather?.weather[0].description}
      />
      <Center fontSize={citySize} fontWeight="bold" color="brand.100">
        {`${weather?.name}, ${weather?.sys?.country}`}
      </Center>
      <Box
        fontSize={weatherInfoSize}
        ml={weatherInfoMl}
        fontWeight="600"
        m="25px 0px 0px 0px"
        color="brand.100"
      >
        Weather Info
      </Box>
      <Flex w={w_weatherInfo} mt="10px" p="5px" bg="#F1F7FD" borderRadius="6px">
        <Box>
          <Flex>
            <Box>
              <Image
                src={WeatherInfoIcons.sunrise}
                w={weatherInfoIconSize}
                m="0px 5px 0px 5px"
                alt=""
              />
            </Box>
            <Box>
              <Box fontSize={weatherInfoTextSize}>
                {" "}
                {getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}{" "}
              </Box>
              <Box fontSize={weatherInfoTextSize}>
                {" "}
                {isDay ? "Sunset" : "Sunrise"}
              </Box>
            </Box>
          </Flex>
        </Box>
        <Spacer />
        <Box pr="10px">
          <Flex bg="#F1F7FD" borderRadius="5px">
            <Box>
              <Image
                src={WeatherInfoIcons.humidity}
                color="brand.100"
                w={weatherInfoIconSize}
                alt=""
              />
            </Box>
            <Box>
              <Box fontSize={weatherInfoTextSize}>
                {weather?.main?.humidity}
              </Box>
              <Box fontSize={weatherInfoTextSize}>Humidity</Box>
            </Box>
          </Flex>
        </Box>
      </Flex>

      <Flex w={w_weatherInfo} mt="10px" p="5px" bg="#F1F7FD" borderRadius="5px">
        <Box>
          <Flex>
            <Box>
              <Image
                src={WeatherInfoIcons.wind}
                w={weatherInfoIconSize}
                m="0px 5px 0px 5px"
                alt=""
              />
            </Box>
            <Box>
              <Box fontSize={weatherInfoTextSize}>{weather?.wind?.speed}</Box>
              <Box fontSize={weatherInfoTextSize}>Wind</Box>
            </Box>
          </Flex>
        </Box>
        <Spacer />
        <Box pr="10px">
          <Flex bg="#F1F7FD" borderRadius="6px">
            <Box>
              <Image
                src={WeatherInfoIcons.pressure}
                w={pressureIconSize}
                m="0px 5px 0px 0px"
                alt=""
              />
            </Box>
            <Box>
              <Box fontSize={weatherInfoTextSize}>
                {weather?.main?.pressure}
              </Box>
              <Box fontSize={weatherInfoTextSize}>Pressure</Box>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
}

export default WeatherInfoComponent;
