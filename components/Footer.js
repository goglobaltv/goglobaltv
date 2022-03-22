import React from "react";
import { SimpleGrid, Center, Flex, Box, Spacer } from "@chakra-ui/react";
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

export default function Footer() {
  const textSize = {
    base: "20px",
    sm: "20px",
    md: "22px",
    lg: "22px",
    xl: "25px",
    "2xl": "25px",
  };
  const w_Box = {
    base: "300px",
    sm: "300px",
    md: "300px",
    lg: "300px",
    xl: "300px",
    "2xl": "400px",
  };
  const h_Footer = {
    base: "660px",
    sm: "660px",
    md: "660px",
    lg: "440px",
    xl: "430px",
    "2xl": "400px",
  };
  const ml_Box = {
    base: "0px",
    sm: "0px",
    md: "10px",
    lg: "40px",
    xl: "40px",
    "2xl": "40px",
  };
  const mt_Text = {
    base: "15px",
    sm: "15px",
    md: "10px",
    lg: "10px",
    xl: "10px",
    "2xl": "10px",
  };
  const display_Web = {
    base: "Block",
    sm: "Block",
    md: "Block",
    lg: "flex",
    xl: "flex",
    "2xl": "flex",
  };
  return (
    <div>
      <Center width={"100%"} bg="brand.200">
        <Box h={h_Footer}>
          <Center mt="40px">
            <SimpleGrid display={display_Web}>
              <Box w={w_Box}>
                <Box ml={ml_Box} w={w_Box} mt={mt_Text}>
                  <Box
                    fontSize={textSize}
                    fontFamily="NiDA Bayon"
                    color="white"
                  >
                    ទំនាក់ទំនង
                  </Box>
                  <Box
                    fontSize="20px"
                    fontFamily="Eras Medium ITC"
                    color="white"
                  >
                    goglobaltv21@gmail.com
                  </Box>
                  <Box
                    fontSize="20px"
                    fontFamily="Eras Medium ITC"
                    color="white"
                  >
                    099 820 089
                  </Box>
                  <Box
                    lineHeight="1.7"
                    fontSize="15px"
                    fontFamily="Kantumruy-Regular"
                    textAlign="left"
                    color="white"
                  >
                    ភូមិថ្មី សង្កាត់ស្វាយដង្គុំ ក្រុមសៀមរាប ខេត្តសៀមរាប។
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
                  Go Global TV គឺជាបណ្តាញទូរទស្សន៍អនឡាញមួយ (Online)
                  ដែលនឹងធ្វើការផ្សព្វផ្សាយតាមបណ្តាញសង្គមជាសាធារណៈ។
                  ក្រុមហ៊ុននឹងផ្តោតសំខាន់លើការផ្តល់ជូននូវលទ្ធភាពអាចទស្សនាការផ្សព្វផ្សាយការអប់រំ
                  ការកម្សាន្ត ព័ត៌មានជាតិ និងអន្តរជាតិ ការយល់ដឹងអំពីពាណិជ្ជកម្ម
                  កសិកម្ម និងទេសចរណ៍។ Go Global TV ក៏នឹងផ្តល់ឱកាសឱ្យក្រុមហ៊ុន
                  និងបុគ្គលផ្សេងៗអាចធ្វើការផ្សព្វផ្សាយពាណិជ្ជកម្ម
                  និងសេចក្តីប្រកាសផ្សេងៗក្នុងកម្មវិធីនានារបស់ទូរទស្សន៍ផងដែរ។
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
                          href="https://www.facebook.com/goglobaltv21"
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
                          href="https://instagram.com/goglobaltv2021?utm_medium=copy_link"
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
                          href="https://www.youtube.com/channel/UCDRsPpNj49QM60qFi_dGzWA"
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
                          href="https://t.me/goglobaltv"
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
                          href="https://vt.tiktok.com/ZSeYGgjou/"
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
      </Center>
    </div>
  );
}
