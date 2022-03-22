import React from "react";
import { Box, Image, Center, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import TruncateMarkup from "react-truncate-markup";
import Link from "next/link";
import { RiCalendarCheckLine, RiThumbUpLine } from "react-icons/ri";
import { BsEye } from "react-icons/bs";
import { Markup } from "interweave";
import moment from "moment";

export default function RelatedArticales({ newData }) {
  // const { author, khmerTitle, publicDate, thumbnail, slug, description1 } =
  //   allnews.fields;

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
  const widthBox = {
    base: "90vw",
    sm: "50vw",
    lg: "28vw",
    xl: "26vw",
    "2xl": "16vw",
  };
  const sub_Title = {
    base: "4vw",
    sm: "3.4vw",
    md: "2.2vw",
    lg: "1.8vw",
    xl: "1.3vw",
    "2xl": "1.2vw",
  };
  const icon_p = {
    base: "3vw",
    sm: "2vw",
    lg: "1vw",
    "2xl": "0.3vw",
  };
  const ml_Icon = {
    base: "0px",
    lg: "1px",
    xl: "2px",
    "2xl": "10px",
  };

  return (
    <Center>
      <Link href={`${newData?._id}`} passHref>
        <Box
          cursor="pointer"
          w={widthBox}
          borderRadius="10px"
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
            <TruncateMarkup lines={1}>
              <Box
                className="cardTitle"
                fontSize={sub_Title}
                fontFamily="NiDA Bayon"
                p="0px 18px 7px 18px"
              >
                <Markup content={newData?.title} />
              </Box>
            </TruncateMarkup>
            <Box pl={icon_p} display="flex" w="100%" p="0px 22px 0px 20px">
              <Box w="50%" display="flex">
                <Icon as={RiCalendarCheckLine} ml={ml_Icon} fontSize="22px" />
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
                <Icon as={RiThumbUpLine} fontSize="22px" />
                <Box
                  fontFamily="Kantumruy-Regular"
                  fontSize="12px"
                  p="5px 0px 0px 5px"
                  mb="5px"
                >
                  {newData?.like}
                </Box>
                <Box ml="10px" mt="-2px">
                  |
                </Box>
                <Icon as={BsEye} ml="10px" fontSize="22px" />
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
