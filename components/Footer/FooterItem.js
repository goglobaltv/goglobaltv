import React, { useState, useEffect } from "react";
import { SimpleGrid, Center, Flex, Box, Spacer } from "@chakra-ui/react";
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

export default function Footer({ footer }) {
  const textSize = {
    base: "20px",
    md: "22px",
    xl: "25px",
    "2xl": "25px",
  };
  const w_Box = {
    base: "300px",
    "2xl": "400px",
  };
  const h_Footer = {
    base: "650px",
    lg: "440px",
    xl: "400px",
    "2xl": "340px",
  };
  const ml_Box = {
    base: "0px",
    md: "10px",
    lg: "40px",
  };
  const mt_Text = {
    base: "15px",
    md: "10px",
  };
  const display_Web = {
    base: "Block",
    lg: "flex",
  };
  return (
    <div>
      <Box h={h_Footer}>
        <Center mt="40px">
          <SimpleGrid display={display_Web}>
            <Box w={w_Box}>
              <Box ml={ml_Box} w={w_Box} mt={mt_Text}>
                <Box fontSize={textSize} fontFamily="NiDA Bayon" color="white">
                  ទំនាក់ទំនង
                </Box>
                <Box fontSize="20px" fontFamily="Eras Medium ITC" color="white">
                  {footer?.email}
                </Box>
                <Box fontSize="20px" fontFamily="Eras Medium ITC" color="white">
                  {footer?.tell}
                </Box>
                <Box
                  lineHeight="1.7"
                  fontSize="15px"
                  fontFamily="Kantumruy-Regular"
                  textAlign="left"
                  color="white"
                >
                  {footer?.address}
                </Box>
              </Box>
            </Box>
            <Box w={w_Box} ml={ml_Box} mt={mt_Text}>
              <Box fontFamily="NiDA Bayon" color="white" fontSize={textSize}>
                អំពីពួកយើង
              </Box>
              <Box
                mt="5px"
                fontSize="15px"
                fontFamily="Kantumruy-Regular"
                textAlign="left"
                color="white"
                lineHeight="1.7"
              >
                {footer?.aboutUs}
              </Box>
            </Box>
            <Box ml={ml_Box} w={w_Box} mt={mt_Text}>
              <Box fontSize={textSize} fontFamily="NiDA Bayon" color="white">
                ជួបគ្នានៅលើបណ្តាញសង្គម
              </Box>
              <Box mt="5px">
                <List spacing={3}>
                  <Flex>
                    <ListItem>
                      <a
                        target="_blank"
                        href={footer?.facebook}
                        rel="noopener noreferrer"
                      >
                        <ListIcon
                          as={FaFacebookSquare}
                          color="white"
                          w="29px"
                          h="29px"
                        />
                      </a>
                    </ListItem>
                    <ListItem>
                      <a
                        target="_blank"
                        href={footer?.instagram}
                        rel="noopener noreferrer"
                      >
                        <ListIcon
                          as={FaInstagram}
                          color="white"
                          w="30px"
                          h="30px"
                        />
                      </a>
                    </ListItem>
                    <ListItem>
                      <a
                        target="_blank"
                        href={footer?.youtube}
                        rel="noopener noreferrer"
                      >
                        <ListIcon
                          as={FaYoutube}
                          color="white"
                          w="31px"
                          h="31px"
                        />
                      </a>
                    </ListItem>
                    <ListItem>
                      <a
                        target="_blank"
                        href={footer?.telegrame}
                        rel="noopener noreferrer"
                      >
                        <ListIcon
                          as={FaTelegramPlane}
                          color="white"
                          w="31px"
                          h="31px"
                        />
                      </a>
                    </ListItem>
                    <ListItem>
                      <a
                        target="_blank"
                        href={footer?.tiktok}
                        rel="noopener noreferrer"
                      >
                        <ListIcon
                          as={SiTiktok}
                          color="white"
                          w="26px"
                          h="26px"
                        />
                      </a>
                    </ListItem>
                  </Flex>
                </List>
              </Box>
            </Box>
          </SimpleGrid>
        </Center>
        <Box
          textAlign="center"
          color="white"
          mt="30px"
          mb="20px"
          fontFamily="bayon"
        >
          © រក្សាសិទ្ធគ្រប់យ៉ាងដោយ ហ្គោគ្លូប៊លធីវី ឆ្នាំ ២០២១
        </Box>
      </Box>
    </div>
  );
}
