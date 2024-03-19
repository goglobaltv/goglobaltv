import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";
import axios from "axios";
import { Markup } from "interweave";
import Link from "next/link";
import { useRouter } from "next/router";
import { getToken } from "../../pages/api/getToken";

export default function SearchButton() {
  // console.log(allnews);
  const router = useRouter();
  const [allNews, setAllNews] = useState([]);
  const [news, setNews] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function getNewDetail() {
      await axios
        .get(
          `${process.env.NEXT_PUBLIC_CMS_API}/api/cms/news/getNews?page=1&limit=10&keyword=&category=`,
          {
            headers: {
              authorization: `Bearer ${getToken() === undefined ? getToken() : getToken()
                }`,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          setAllNews(res.data.docs);
          // if (loading) {
          //   setLoading(false);
          // }
        });
    };
    getNewDetail();
  }, []);

  useEffect(() => {
    if (allNews?.length > 0) {
      console.log(allNews?.length);
      setNews([...allNews]);
    }
  }, [allNews]);

  const handleChange = (e) => {
    let newData = [];

    if (e.target.value) {
      newData = allNews?.filter((a) =>
        a?.title.includes(e.target.value.toString())
      );
      setNews([...newData]);
    } else {
      setNews([...allNews]);
    }
  };

  const MotionBox = motion(Box);
  const buttonVariants = {
    hover: {
      backgroundColor: "#B7D9F7",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div>
      <Box>
        <Box
          // position={open ? "fixed" : ""}
          mt="5px"
          w={{ xl: "250px", "2xl": "340px" }}
          textAlign="right"
          h="38px"
          cursor="pointer"
        >
          <InputGroup size="md">
            <Input
              onClick={() => setOpen(!open)}
              onChange={handleChange}
              borderRadius="5px"
              // borderColor="1px solid white"
              bg="white"
              type="text"
              pt="3px"
              fontFamily="Kantumruy-Regular"
              placeholder="ស្វែងរកព័ត៌មាន . . ."
            />
          </InputGroup>
        </Box>
        <Box
          // position="fixed"
          display={open ? "block" : "none"}
          w={{ xl: "250px", "2xl": "340px" }}
          zIndex="0"
          bg="white"
          borderRadius="5px"
          boxShadow="0 1px 6px 0 #9C9C9D"
        >
          {news?.slice(0, 3).map((newData) => (
            <div key={newData?._id}>
              <Link
                href={
                  router.pathname === "/news_details/[slug]"
                    ? `${newData?._id}`
                    : `news_details/${newData?._id}`
                }
                passHref
              >
                <MotionBox
                  variants={buttonVariants}
                  whileHover="hover"
                  cursor="pointer"
                  w={{ xl: "250px", "2xl": "340px" }}
                  borderRadius="5px"
                  p="4px 12px"
                >
                  <Markup content={newData?.title} />
                </MotionBox>
              </Link>
            </div>
          ))}
        </Box>
      </Box>
    </div>
  );
}
