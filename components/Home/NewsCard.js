import React from "react";
import { Box, Image, Center, Flex, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import TruncateMarkup from "react-truncate-markup";
import { RiCalendarCheckLine, RiThumbUpLine } from "react-icons/ri";
import { BsEye } from "react-icons/bs";
import Link from "next/link";
import moment from "moment";

export default function NewsCard({ dailyNews }) {
  const MotionImage = motion(Image);
  const img_hover = {
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.3,
      },
    },
  };

  const sub_Title = {
    base: "20px",
    xl: "22px",
    "2xl": "24px",
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
      <Link href={`news_details/${dailyNews?._id}`} passHref>
        <Box
          cursor="pointer"
          w="100%"
          borderRadius="15px"
          bg="#e6e6e6"
          position="relative"
          overflow="hidden"
        >
          <MotionImage
            variants={img_hover}
            whileHover="hover"
            src={`${dailyNews?.thumbnail}`}
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
                  {dailyNews?.title.replace(
                    /<\/?(?!a)(?!p)(?!img)\w*\b[^>]*>/gi,
                    ""
                  )}
                </div>
              </TruncateMarkup>
            </Box>

            <Box pl={icon_p} display="flex" w="100%" p="0px 22px 0px 20px">
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
                  {moment(dailyNews?.createdAt || dailyNews?.updatedAt).format(
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
                  {dailyNews?.like}
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
                  {dailyNews?.view}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Link>
    </Center>
  );
}
