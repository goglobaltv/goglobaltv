import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import TruncateMarkup from "react-truncate-markup";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PopularItem({ newData }) {
  let router = useRouter();
  const widthImg = {
    base: "30vw",
    md: "6.1vw",
  };
  const title_size = {
    base: "3.7vw",
    sm: "0.9vw",
    xl: "0.8vw",
    "2xl": "0.7vw",
  };
  const title_width = {
    base: "55vw",
    sm: "16vw",
  };
  return (
    <Link
      href={
        router.pathname === "/news_details/[slug]"
          ? `${newData?._id}`
          : `news_details/${newData?._id}`
      }
      passHref
    >
      <Flex mb="0.5vw" cursor="pointer">
        <Box w={widthImg}>
          <Image src={`${newData?.thumbnail}`} alt="image" />
        </Box>

        <Box
          fontFamily="Kantumruy-Regular"
          w={title_width}
          fontSize={title_size}
          pl="8px"
          mt="2px"
          lineHeight="1.9"
        >
          <TruncateMarkup lines={3}>
            <div>
              {newData?.title.replace(/<\/?(?!a)(?!p)(?!img)\w*\b[^>]*>/gi, "")}
            </div>
          </TruncateMarkup>
        </Box>
      </Flex>
    </Link>
  );
}
