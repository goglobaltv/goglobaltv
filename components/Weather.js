import React, { useEffect, useState } from "react";
import CityComponent from "./Weather/CityComponent";
import WeatherInfoComponent from "./Weather/WeatherInfoComponent";
import { Box, Center } from "@chakra-ui/react";
import Axios from "axios";

function Weather() {
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState();



  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });


  var geolocation = require("geolocation");

  const getLocation = () => {
    geolocation.getCurrentPosition(function (err, position) {
      if (err) {
      }

      setLocation({
        latitude: position?.coords?.latitude,
        longitude: position?.coords?.longitude,
      });

      reverseCoordinate({
        lat: position?.coords?.latitude,
        lng: position?.coords?.longitude,
      });
    });
  };



  const reverseCoordinate = async ({ lat, lng }) => {
    await fetch(
      `https://us1.locationiq.com/v1/reverse.php?key=${process.env.NEXT_PUBLIC_LOCATION_IQ_API}&lat=${lat}&lon=${lng}&format=json`
    )
      .then((response) => response.json())
      .then((data) => {
        setCity(data?.address?.city || data?.address?.state);
      })
      .catch((error) => alert(error));
  };

  const fetchWeather = async () => {
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d67d40a31e05928d911eca8ff44ea3e7`
    );
    setWeather(response.data);
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (city) {
      fetchWeather();
    }
  }, [city]);

  const weatherSize = {
    sm: "18px",
    md: "15px",
    lg: "16px",
    xl: "16px",
    "2xl": "22px",
  };
  const containerP = {
    base: "25px",
    sm: "30px",
    md: "25px",
    lg: "20px",
    xl: "30px",
  };
  const containerMt = {
    base: "30px",
    sm: "10px",
    md: "10px",
    lg: "10px",
    xl: "30px",
    "2xl": "30px",
  };

  return (
    <Center
      h={{ sm: "420px", md: "380px", lg: "400px", xxl: "440px" }}
      color="brand.100"
      display="flex"
      flexDirection="column"
      alignItems="center"
      boxShadow="1px 1px 6px 0 #BFBFBF"
      p={containerP}
      borderRadius="4px"
      w="98%"
      backgroundImage="linear-gradient(to top, #c2ddf9, #cee4f9, #dbeafa, #e7f1fa, #f3f7fb)"
      mt={containerMt}
    >
      <Box fontSize={weatherSize} fontWeight="bold" color="brand.100">
        Weather
      </Box>

      {weather ? (
        <WeatherInfoComponent weather={weather} />
      ) : (
        <CityComponent setCity={setCity} fetchWeather={fetchWeather} />
      )}
    </Center>
  );
}

export default Weather;
