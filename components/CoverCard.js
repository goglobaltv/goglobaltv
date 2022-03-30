import React from "react";
import { Box, Image, Center, Flex, Icon, Spacer } from "@chakra-ui/react";
import { motion } from "framer-motion";
import TruncateMarkup from "react-truncate-markup";
import { RiCalendarCheckLine, RiThumbUpLine } from "react-icons/ri";
import { BsEye } from "react-icons/bs";
import { Markup } from "interweave";
import moment from "moment";
import Link from "next/link";

export default function CoverCard({ newData }) {
  // console.log(newData, "all new");
  const MotionImage = motion(Image);
  const MotionBox = motion(Box);
  const img_hover = {
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.3,
      },
    },
  };
  const des_hover = {
    hover: {
      display: "block",
    },
  };

  let widthBox = {
    base: "92vw",
    sm: "45vw",
    md: "43vw",
    lg: "27vw",
    "2xl": "22.5vw",
  };
  const title_size = {
    base: "22px",
    lg: "23px",
    "2xl": "24px",
  };
  const padding = {
    //top,right,buttom,left
    base: "0vw 1vw 0.5vw 3vw",
    sm: "0vw 1vw 0.5vw 2vw",
    md: "0vw 1vw 0.5vw 2vw",
    lg: "0vw 1vw 0.5vw 1vw",
    "2xl": "0vw 1vw 0.5vw 1vw",
  };

  const icon_p = {
    base: "3vw",
    sm: "2vw",
    lg: "1vw",
    "2xl": "0.3vw",
  };

  const gradientWidth = {
    base: "95vw",
    sm: "44.9vw",
    md: "42.9vw",
    lg: "27.7vw",
  };

  const ml_Icon = {
    base: "0px",
    lg: "1px",
    xl: "2px",
    "2xl": "10px",
  };

  return (
    <Center>
      <Link href={`news_details/${newData?._id}`} passHref>
        <Box
          cursor="pointer"
          w={widthBox}
          borderRadius="15px"
          bg="#e6e6e6"
          position="relative"
          overflow="hidden"
        >
          <MotionImage
            variants={img_hover}
            whileHover="hover"
            src={`${newData?.thumbnail}`}
          />
          <Box
            position="absolute"
            bottom="0px"
            color="white"
            bgGradient="linear-gradient(rgba(14, 13, 13, 0.01), rgb(19, 18, 18))"
            pt="2vw"
            pb="0.5vw"
            w={gradientWidth}
          >
            <Box
              className="cardTitle"
              w={widthBox}
              fontSize={title_size}
              fontFamily="NiDA Bayon"
              p={padding}
            >
              <TruncateMarkup lines={2}>
                <div>
                  {newData?.title.replace(
                    /<\/?(?!a)(?!p)(?!img)\w*\b[^>]*>/gi,
                    ""
                  )}
                </div>
              </TruncateMarkup>
            </Box>
            <Box pl={icon_p} display="flex" w={widthBox} p="0px 22px 0px 20px">
              <Box w="50%" display="flex">
                <Icon
                  as={RiCalendarCheckLine}
                  ml={ml_Icon}
                  mt="1px"
                  fontSize="22px"
                />
                <Box
                  fontFamily="Kantumruy-Regular"
                  fontSize="12px"
                  p="5px 0px 0px 5px"
                >
                  {moment(newData?.createdAt || newData?.updatedAt).format(
                    "YYYY-MMMM-DD"
                  )}
                </Box>
              </Box>
              <Box w="50%" display="flex" justifyContent="right">
                <Icon as={RiThumbUpLine} mt="1px" fontSize="22px" />
                <Box
                  fontFamily="Kantumruy-Regular"
                  fontSize="12px"
                  p="5px 0px 0px 5px"
                  mb="5px"
                >
                  {newData?.like}
                </Box>
                <Box ml="10px" mt="-1px">
                  |
                </Box>
                <Icon as={BsEye} ml="10px" mt="2px" fontSize="22px" />
                <Box
                  fontFamily="Kantumruy-Regular"
                  fontSize="12px"
                  p="5px 0px 0px 5px"
                  mb="5px"
                >
                  {newData?.view}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Link>
    </Center>
  );
}
