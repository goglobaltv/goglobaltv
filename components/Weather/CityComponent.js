import React, { useState } from "react";
import {
  Box,
  Image,
  IconButton,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Center,
} from "@chakra-ui/react";

function CityComponent(props) {
  const { setCity, fetchWeather } = props;

  const [value, setValue] = useState();

  return (
    <Box>
      <Center>
        <Image
          h="140px"
          w="140px"
          m="20px"
          src="../icons-weather/perfect-day.svg"
          alt="Dan Abramov"
        />
      </Center>
      <Center
        fontSize="16px"
        m="10px"
        color="brand.100"
        fontWeight="500"
        mb="20px"
      >
        Find weather of your city
      </Center>

      <FormControl
        display="flex"
        flexDirection="row"
        fontSize="18px"
        fontWeight="bold"
        borderRadius="6px"
        border="#488EE7 solid 1px"
      >
        <Input
          border="none"
          outline="none"
          placeholder="Search your city"
          onChange={(e) => setValue(e.target.value)}
        />

        <Button
          bg="#59A1FB"
          color="white"
          cursor="pointer"
          onClick={() => setCity(value)}
        >
          Search
        </Button>
      </FormControl>
    </Box>
  );
}

export default CityComponent;
