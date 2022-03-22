/* eslint-disable @next/next/link-passhref */
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Center,
  Icon,
  Divider,
  Spacer,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BiMenu } from "react-icons/bi";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import navStyles from "./Navbar.module.css";
import SearchButton from "../Search/SearchButton";

export default function NavMoile() {
  const display_NavMobile = {
    base: "flex",
    sm: "flex",
    md: "flex",
    lg: "flex",
    xl: "none",
    "2xl": "none",
  };
  const display_Box = {
    base: "block",
    sm: "block",
    md: "block",
    lg: "block",
    xl: "none",
    "2xl": "none",
  };
  const w_Box = {
    base: "95%",
    sm: "95%",
    md: "90%",
    lg: "85%",
    xl: "85%",
    "2xl": "70%",
  };

  const MotionBox = motion(Box);
  const buttonVariants = {
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3,
      },
    },
  };

  //Active page
  const router = useRouter();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const search_Box = {
    base: "200px",
    md: "280px",
  };

  return (
    <div className={navStyles.navbar}>
      <Box display={display_Box} h="50px" w="100%" bg="brand.200">
        <Center>
          <Box display={display_NavMobile} w={w_Box} h="50px">
            <Button
              margin="auto"
              bg="#4E7FCE"
              h="35px"
              w="35px"
              onClick={onOpen}
              cursor="pointer"
              textAlign="center"
            >
              <Icon
                textAlign="center"
                fontSize="35px"
                color="white"
                as={BiMenu}
              />
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="top"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent color="brand.100">
                <DrawerCloseButton color="brand.100" />
                <Divider mt="50px" />
                <DrawerBody>
                  <Link
                    color={router.pathname === "/" ? "brand.100" : "brand.200"}
                    href="/"
                  >
                    <MotionBox
                      bg={router.pathname === "/" ? "gray.200" : ""}
                      variants={buttonVariants}
                      whileHover="hover"
                      cursor="pointer"
                      fontWeight="semibold"
                      fontFamily="Kantumruy-Regular"
                      fontSize="20px"
                      p="14px 0px 5px 10px"
                      onClick={onClose}
                    >
                      <a>ទំព័រដើម</a>
                    </MotionBox>
                  </Link>
                  <Link
                    color={
                      router.pathname === "/national"
                        ? "brand.100"
                        : "brand.200"
                    }
                    href="/national"
                  >
                    <MotionBox
                      bg={router.pathname === "/national" ? "gray.200" : ""}
                      variants={buttonVariants}
                      whileHover="hover"
                      cursor="pointer"
                      fontWeight="semibold"
                      fontFamily="Kantumruy-Regular"
                      fontSize="20px"
                      p="14px 0px 5px 10px"
                      onClick={onClose}
                    >
                      <a>ព័ត៌មានជាតិ</a>
                    </MotionBox>
                  </Link>
                  <Link
                    color={
                      router.pathname === "/international"
                        ? "brand.100"
                        : "brand.200"
                    }
                    href="/international"
                  >
                    <MotionBox
                      bg={
                        router.pathname === "/international" ? "gray.200" : ""
                      }
                      variants={buttonVariants}
                      whileHover="hover"
                      cursor="pointer"
                      fontWeight="semibold"
                      fontFamily="Kantumruy-Regular"
                      fontSize="20px"
                      p="14px 0px 5px 10px"
                      onClick={onClose}
                    >
                      <a>ព័ត៌មានអន្តរជាតិ</a>
                    </MotionBox>
                  </Link>
                  <Link href="/education">
                    <MotionBox
                      bg={router.pathname === "/education" ? "gray.200" : ""}
                      variants={buttonVariants}
                      whileHover="hover"
                      cursor="pointer"
                      fontWeight="semibold"
                      fontFamily="Kantumruy-Regular"
                      fontSize="20px"
                      p="14px 0px 5px 10px"
                      onClick={onClose}
                    >
                      <a>ការអប់រំ</a>
                    </MotionBox>
                  </Link>
                  <Link href="/business">
                    <MotionBox
                      bg={router.pathname === "/business" ? "gray.200" : ""}
                      variants={buttonVariants}
                      whileHover="hover"
                      cursor="pointer"
                      fontWeight="semibold"
                      fontFamily="Kantumruy-Regular"
                      fontSize="20px"
                      p="14px 0px 5px 10px"
                      onClick={onClose}
                    >
                      <a>ពាណិជ្ជកម្ម</a>
                    </MotionBox>
                  </Link>
                  <Link href="/agriculture">
                    <MotionBox
                      bg={router.pathname === "/agriculture" ? "gray.200" : ""}
                      variants={buttonVariants}
                      whileHover="hover"
                      cursor="pointer"
                      fontWeight="semibold"
                      fontFamily="Kantumruy-Regular"
                      fontSize="20px"
                      p="14px 0px 5px 10px"
                      onClick={onClose}
                    >
                      <a>កសិកម្ម</a>
                    </MotionBox>
                  </Link>
                  <Link href="/technology">
                    <MotionBox
                      bg={router.pathname === "/technology" ? "gray.200" : ""}
                      variants={buttonVariants}
                      whileHover="hover"
                      cursor="pointer"
                      fontWeight="semibold"
                      fontFamily="Kantumruy-Regular"
                      fontSize="20px"
                      p="14px 0px 5px 10px"
                      onClick={onClose}
                    >
                      <a>បច្ចេកវិទ្យា</a>
                    </MotionBox>
                  </Link>
                  <Link href="/entertainment-tourism">
                    <MotionBox
                      bg={
                        router.pathname === "/entertainment-tourism"
                          ? "gray.200"
                          : ""
                      }
                      variants={buttonVariants}
                      whileHover="hover"
                      cursor="pointer"
                      fontWeight="semibold"
                      fontFamily="Kantumruy-Regular"
                      fontSize="20px"
                      p="14px 0px 5px 10px"
                      onClick={onClose}
                    >
                      <a>កម្សាន្ដ និងទេសចរណ៍</a>
                    </MotionBox>
                  </Link>
                  <Link href="/health">
                    <MotionBox
                      bg={router.pathname === "/health" ? "gray.200" : ""}
                      variants={buttonVariants}
                      whileHover="hover"
                      cursor="pointer"
                      fontWeight="semibold"
                      fontFamily="Kantumruy-Regular"
                      fontSize="20px"
                      p="14px 0px 5px 10px"
                      onClick={onClose}
                    >
                      <a>សុខភាព</a>
                    </MotionBox>
                  </Link>
                  <Link href="/sport">
                    <MotionBox
                      bg={router.pathname === "/sport" ? "gray.200" : ""}
                      variants={buttonVariants}
                      whileHover="hover"
                      cursor="pointer"
                      fontWeight="semibold"
                      fontFamily="Kantumruy-Regular"
                      fontSize="20px"
                      p="14px 0px 5px 10px"
                      onClick={onClose}
                    >
                      <a>កីឡា</a>
                    </MotionBox>
                  </Link>
                </DrawerBody>
                <DrawerFooter>
                  <Box w="100%" fontFamily="Roberto" textAlign="center">
                    © 2021 Go Global TV
                  </Box>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
            {/* search button */}
            <Spacer />
            {/* <SearchButton /> */}
            <List>
              <ListItem ml="10px" mt="12px">
                <a
                  target="_blank"
                  href="https://www.facebook.com/goglobaltv21"
                  rel="noopener noreferrer"
                >
                  <ListIcon
                    as={FaFacebookSquare}
                    color="white"
                    w="24px"
                    h="24px"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://instagram.com/goglobaltv2021?utm_medium=copy_link"
                  rel="noopener noreferrer"
                >
                  <ListIcon as={FaInstagram} color="white" w="25px" h="25px" />
                </a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UCDRsPpNj49QM60qFi_dGzWA"
                  rel="noopener noreferrer"
                >
                  <ListIcon as={FaYoutube} color="white" w="25px" h="25px" />
                </a>
                <a
                  target="_blank"
                  href="https://t.me/goglobaltv"
                  rel="noopener noreferrer"
                >
                  <ListIcon
                    as={FaTelegramPlane}
                    color="white"
                    w="25px"
                    h="25px"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://vt.tiktok.com/ZSeYGgjou/"
                  rel="noopener noreferrer"
                >
                  <ListIcon as={SiTiktok} color="white" w="23px" h="23px" />
                </a>
              </ListItem>
            </List>
          </Box>
        </Center>
      </Box>
    </div>
  );
}
