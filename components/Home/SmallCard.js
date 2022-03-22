import React from "react";
import { Box, Center } from "@chakra-ui/react";
import SmallCardItem from "./SmallCardItem";

export default function SmallCard({ allDailyNews }) {
  const mt = {
    base: "3vw",
    sm: "3vw",
    md: "0",
    lg: "0",
    xl: "0",
    "2xl": "0",
  };
  return (
    <Center>
      <Box w="100%" h="fit-content" overflow="hidden" mt={mt}>
        {allDailyNews.slice(1, 4).map((newData) => (
          <SmallCardItem key={newData?._id} newData={newData} />
        ))}
      </Box>
    </Center>
  );
}
