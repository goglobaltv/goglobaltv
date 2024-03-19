import { Box, Center, Flex, Spacer, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { useRouter } from "next/router";
import navStyles from "./Navbar.module.css";

export default function Menu() {
  const display_Box = {
    base: "none",
    sm: "none",
    md: "none",
    lg: "none",
    xl: "block",
    "2xl": "block",
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
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const [show, setShow] = React.useState(false);

  //Active page
  const router = useRouter();
  // const { query } = useRouter();

  // console.log(router.pathname + " " + "ROUTER");

  return (
    <div className={navStyles.navbar}>
      <Box display={display_Box} h="50px" w="100%" bg="brand.200">
        <Center>
          <Box width={w_Box} bg="brand.200" h="50px">
            <Flex>
              <Link
                color={router.pathname === "/" ? "brand.100" : "brand.200"}
                href="/"
              >
                {/* <ActiveLink href='/'> */}
                <MotionBox
                  bg={router.pathname === "/" ? "brand.100" : ""}
                  variants={buttonVariants}
                  whileHover="hover"
                  cursor="pointer"
                  fontFamily="NiDA Bayon"
                  fontSize="20px"
                  color="white"
                  textAlign="center"
                  h="50px"
                  p="12px"
                >
                  ទំព័រដើម
                </MotionBox>
                {/* </ActiveLink> */}
              </Link>
              <Link
                color={
                  router.pathname === "/national" ? "brand.100" : "brand.200"
                }
                href="/national"
              >
                <MotionBox
                  bg={router.pathname === "/national" ? "brand.100" : ""}
                  variants={buttonVariants}
                  whileHover="hover"
                  cursor="pointer"
                  fontFamily="NiDA Bayon"
                  fontSize="20px"
                  color="white"
                  textAlign="center"
                  h="50px"
                  p="12px"
                >
                  ជាតិ
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
                  bg={router.pathname === "/international" ? "brand.100" : ""}
                  variants={buttonVariants}
                  whileHover="hover"
                  cursor="pointer"
                  fontFamily="NiDA Bayon"
                  fontSize="20px"
                  color="white"
                  textAlign="center"
                  h="50px"
                  p="12px"
                >
                  អន្តរជាតិ
                </MotionBox>
              </Link>
              <Link
                color={
                  router.pathname === "/education" ? "brand.100" : "brand.200"
                }
                href="/education"
              >
                <MotionBox
                  bg={router.pathname === "/education" ? "brand.100" : ""}
                  variants={buttonVariants}
                  whileHover="hover"
                  cursor="pointer"
                  fontFamily="NiDA Bayon"
                  fontSize="20px"
                  color="white"
                  textAlign="center"
                  h="50px"
                  p="12px"
                >
                  អប់រំ
                </MotionBox>
              </Link>
              <Link
                color={
                  router.pathname === "/business" ? "brand.100" : "brand.200"
                }
                href="/business"
              >
                <MotionBox
                  bg={router.pathname === "/business" ? "brand.100" : ""}
                  variants={buttonVariants}
                  whileHover="hover"
                  cursor="pointer"
                  fontFamily="NiDA Bayon"
                  fontSize="20px"
                  color="white"
                  textAlign="center"
                  h="50px"
                  p="12px"
                >
                  ពាណិជ្ជកម្ម
                </MotionBox>
              </Link>
              <Link
                color={
                  router.pathname === "/agriculture" ? "brand.100" : "brand.200"
                }
                href="/agriculture"
              >
                <MotionBox
                  bg={router.pathname === "/agriculture" ? "brand.100" : ""}
                  variants={buttonVariants}
                  whileHover="hover"
                  cursor="pointer"
                  fontFamily="NiDA Bayon"
                  fontSize="20px"
                  color="white"
                  textAlign="center"
                  h="50px"
                  p="12px"
                >
                  កសិកម្ម
                </MotionBox>
              </Link>
              <Link
                color={
                  router.pathname === "/technology" ? "brand.100" : "brand.200"
                }
                href="/technology"
              >
                <MotionBox
                  bg={router.pathname === "/technology" ? "brand.100" : ""}
                  variants={buttonVariants}
                  whileHover="hover"
                  cursor="pointer"
                  fontFamily="NiDA Bayon"
                  fontSize="20px"
                  color="white"
                  textAlign="center"
                  h="50px"
                  p="12px"
                >
                  បច្ចេកវិទ្យា
                </MotionBox>
              </Link>
              <Link
                color={
                  router.pathname === "/entertainment-tourism"
                    ? "brand.100"
                    : "brand.200"
                }
                href="/entertainment-tourism"
              >
                <MotionBox
                  bg={
                    router.pathname === "/entertainment-tourism"
                      ? "brand.100"
                      : ""
                  }
                  variants={buttonVariants}
                  whileHover="hover"
                  cursor="pointer"
                  fontFamily="NiDA Bayon"
                  fontSize="20px"
                  color="white"
                  textAlign="center"
                  h="50px"
                  p="12px"
                >
                  កម្សាន្ដ និងទេសចរណ៍
                </MotionBox>
              </Link>
              <Link
                color={
                  router.pathname === "/health" ? "brand.100" : "brand.200"
                }
                href="/health"
              >
                <MotionBox
                  bg={router.pathname === "/health" ? "brand.100" : ""}
                  variants={buttonVariants}
                  whileHover="hover"
                  cursor="pointer"
                  fontFamily="NiDA Bayon"
                  fontSize="20px"
                  color="white"
                  textAlign="center"
                  h="50px"
                  p="12px"
                >
                  សុខភាព
                </MotionBox>
              </Link>
              <Link
                color={router.pathname === "/sport" ? "brand.100" : "brand.200"}
                href="/sport"
              >
                <MotionBox
                  bg={router.pathname === "/sport" ? "brand.100" : ""}
                  variants={buttonVariants}
                  whileHover="hover"
                  cursor="pointer"
                  fontFamily="NiDA Bayon"
                  fontSize="20px"
                  color="white"
                  textAlign="center"
                  h="50px"
                  p="12px"
                >
                  កីឡា
                </MotionBox>
              </Link>
              {/* <Spacer /> */}
              {/* <SearchButton /> */}
            </Flex>
          </Box>
        </Center>
      </Box>
    </div>
  );
}
