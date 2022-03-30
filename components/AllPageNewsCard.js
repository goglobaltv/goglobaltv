import React from "react";
import { Box, Image, Center, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import TruncateMarkup from "react-truncate-markup";
import Link from "next/link";
import { RiThumbUpLine, RiCalendarCheckLine } from "react-icons/ri";
import { BsEye } from "react-icons/bs";
import moment from "moment";

export default function AllPageNewsCard({ newData }) {
  const MotionImage = motion(Image);
  const img_hover = {
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.3,
      },
    },
  };
  const widthBox = {
    base: "90vw",
    sm: "60vw",
    md: "60vw",
    lg: "29vw",
    xl: "29.4vw",
    "2xl": "24vw",
  };
  const icon_p = {
    base: "3vw",
    sm: "2vw",
    lg: "1vw",
    "2xl": "0.3vw",
  };
  const sub_Title = {
    base: "4vw",
    sm: "3.4vw",
    md: "2.2vw",
    lg: "1.8vw",
    xl: "1.3vw",
    "2xl": "1.2vw",
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
            bgGradient="linear-gradient(rgba(14, 13, 13, 0.02), rgb(19, 18, 18))"
            pt="2vw"
            pb="0.5vw"
            w="100%"
          >
            <Box
              className="cardTitle"
              fontSize={sub_Title}
              fontFamily="NiDA Bayon"
              p="0px 18px 7px 18px"
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
                  {moment(newData?.updatedAt || newData?.updatedAt).format(
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
                <Icon as={BsEye} ml="10px" mt="1px" fontSize="22px" />
                <Box
                  fontFamily="Kantumruy-Regular"
                  fontSize="12px"
                  p="5px 0px 0px 5px"
                  mb="5px"
                >
                  {newData?.like}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Link>
    </Center>
  );
}
