import React, { useState, useEffect } from "react";
import { Box, Center, Flex, Image, Spacer } from "@chakra-ui/react";
import TruncateMarkup from "react-truncate-markup";
import PopularItem from "./PopularItem";
import axios from "axios";
import { getToken } from "../pages/api/getToken";

export default function Popular() {
  const [popularNews, setPopularNews] = useState([]);

  useEffect(() => {
    const getPopular = async () => {
      await axios
        .get(
          `${process.env.NEXT_PUBLIC_CMS_API}/api/cms/dashboard/getPopular?page=&limit=6`,
          {
            headers: {
              'authorization': `Bearer ${
                getToken() === undefined ? getToken() : getToken()
              }`,
            },
          }
        )
        .then((res) => {
          // console.log(res.data.docs);
          setPopularNews(res.data.docs);
        });
    };
    getPopular();
  }, []);
  // console.log(adsData?.docs, "adsDataa");
  const width = {
    base: "100%",
    sm: "100%",
    md: "22vw",
    lg: "22vw",
    xl: "22vw",
    "2xl": "18.5vw",
  };

  return (
    <Center>
      <Box w={width} h="fit-content">
        {popularNews?.map((newData) => (
          <PopularItem key={newData?._id} newData={newData} />
        ))}
      </Box>
    </Center>
  );
}
