import React from "react";
import { Box, Flex, Image, Icon } from "@chakra-ui/react";
import TruncateMarkup from "react-truncate-markup";
import { RiCalendarCheckLine, RiThumbUpLine } from "react-icons/ri";
import { BsEye } from "react-icons/bs";
import Link from "next/link";
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
    "2xl": "0.8vw",
  };
  const text = {
    base: "65vw",
    sm: "67vw",
    md: "39vw",
    lg: "20vw",
    "2xl": "16.5vw",
  };
  const padding_l = {
    base: "2vw",
    sm: "1.5vw",
    md: "0.7vw",
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
          <Box display="flex" w="100%" pr="22px" mt="10px">
            <Box w="50%" display="flex">
              <Icon
                as={RiCalendarCheckLine}
                color="brand.100"
                mt="1px"
                fontSize="22px"
              />
              <Box
                fontFamily="Kantumruy-Regular"
                fontSize="12px"
                p="5px 0px 0px 5px"
                color="brand.100"
              >
                {moment(newData?.createdAt || newData?.updatedAt).format(
                  "YYYY-MMMM-DD"
                )}
              </Box>
            </Box>
            <Box w="50%" display="flex" justifyContent="right">
              <Icon
                as={RiThumbUpLine}
                color="brand.100"
                mt="1px"
                fontSize="22px"
              />
              <Box
                fontFamily="Kantumruy-Regular"
                fontSize="12px"
                p="5px 0px 0px 5px"
                mb="5px"
                color="brand.100"
              >
                {newData?.like}
              </Box>
              <Box ml="10px" mt="-1px" color="brand.100">
                |
              </Box>
              <Icon
                as={BsEye}
                color="brand.100"
                ml="10px"
                mt="2px"
                fontSize="22px"
              />
              <Box
                fontFamily="Kantumruy-Regular"
                fontSize="12px"
                p="5px 0px 0px 5px"
                mb="5px"
                color="brand.100"
              >
                {newData?.view}
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Link>
  );
}
