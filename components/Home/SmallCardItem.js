import React from "react";
import { Box, Flex, Image, Icon } from "@chakra-ui/react";
import TruncateMarkup from "react-truncate-markup";
import { BsFillPersonFill } from "react-icons/bs";
import { RiCalendarCheckLine } from "react-icons/ri";
import Link from "next/link";
import { Markup } from "interweave";
import moment from "moment";

export default function SmallCard({ newData }) {
  const imgWidth = {
    base: "30vw",
    sm: "27vw",
    md: "19vw",
    lg: "9.17vw",
    xl: "9.33vw",
    "2xl": "7.55vw",
  };

  const title_size = {
    base: "3.1vw",
    sm: "2.7vw",
    md: "1.9vw",
    lg: "1vw",
    xl: "1vw",
    "2xl": "0.8vw",
  };
  const text = {
    base: "65vw",
    sm: "67vw",
    md: "39vw",
    lg: "20vw",
    xl: "20vw",
    "2xl": "16.5vw",
  };
  const padding_l = {
    base: "2vw",
    sm: "1.5vw",
    md: "0.7vw",
    lg: "0.7vw",
    xl: "0.7vw",
    "2xl": "0.7vw",
  };
  const text_icon = {
    base: "3vw",
    sm: "2.5vw",
    md: "1.7vw",
    lg: "0.9vw",
    xl: "0.9vw",
    "2xl": "0.7vw",
  };

  const fontSizeIcon = {
    base: "4.5vw",
    sm: "4vw",
    md: "2.5vw",
    lg: "1.5vw",
    xl: "",
    "2xl": "1vw",
  };
  const p = {
    base: "4.5vw",
    sm: "4vw",
    md: "3vw",
    lg: "1vw",
    xl: "1vw",
    "2xl": "1vw",
  };

  return (
    <Link href={`news_details/${newData?._id}`} passHref>
      <Flex mb="0.5vw" cursor="pointer">
        <Box w={imgWidth}>
          <Image src={`${newData?.thumbnail}`} borderRadius="7%" alt="" />
        </Box>
        <Box
          fontFamily="Kantumruy-Regular"
          w={text}
          fontSize={title_size}
          pl={padding_l}
          mt="2px"
          lineHeight="1.93"
        >
          <TruncateMarkup lines={2}>
            <div>
              {newData?.title.replace(/<\/?(?!a)(?!p)(?!img)\w*\b[^>]*>/gi, "")}
            </div>
          </TruncateMarkup>
          <Flex pt={p}>
            <Icon as={BsFillPersonFill} mt="2px" fontSize={fontSizeIcon} />
            <Box mt="2px" fontSize={text_icon} pl="3px">
              {newData?.author}
            </Box>
            <Icon
              as={RiCalendarCheckLine}
              ml="30px"
              mt="3px"
              fontSize={fontSizeIcon}
            />
            <Box fontSize={text_icon} mt="2px" pl="5px">
              {moment(newData?.updatedAt || newData?.updatedAt).format(
                "YYYY-MMMM-DD"
              )}
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Link>
  );
}
