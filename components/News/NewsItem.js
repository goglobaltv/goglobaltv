import React from "react";
import {
  Box,
  Center,
  Grid,
  GridItem,
  Flex,
  Image,
  Spacer,
  SimpleGrid,
  Link,
} from "@chakra-ui/react";
import AllPageNewsCard from "../AllPageNewsCard";
import Poplular from "../Poplular";

export default function NewsItem({ allnews }) {
  const display_Box = {
    base: "95%",
    sm: "95%",
    md: "90%",
    lg: "85%",
    xl: "85%",
    "2xl": "70%",
  };
  const title = {
    base: "20px",
    sm: "20px",
    md: "22px",
    lg: "22px",
    xl: "25px",
    "2xl": "25px",
  };
  const width_Advertisement = {
    base: "100%",
    sm: "100%",
    md: "22vw",
    lg: "22vw",
    xl: "22vw",
    "2xl": "18.5vw",
  };
  const w_Line = {
    base: "98%",
    sm: "90%",
    md: "66%",
    lg: "70%",
    xl: "70%",
    "2xl": "70%",
  };

  return (
    <div>
      <Center>
        <Box w={display_Box} mt="10" mb="50px">
          <Box
            w="90px"
            // borderBottom = "40px solid #3162B1"
            // borderRight = "25px solid transparent"
            textAlign="center"
            fontSize={title}
            fontFamily="NiDA Bayon"
            color="white"
            borderRadius="0px 15px 0px 0px"
            bg="brand.200"
            h="40px"
            pt="6px"
          >
            ព័ត៌មាន
          </Box>
          <Box bg="brand.200" mb="30px" h="4px" w={w_Line} />
          <Grid
            templateColumns={{ base: "1fr", lg: "2.5fr 1fr", md: "2fr 1fr" }}
            gap={4}
          >
            <GridItem colSpan={1}>
              <Grid
                templateColumns={{ base: "1fr", lg: "1fr 1fr", md: "1fr" }}
                gap={4}
              >
                {allnews.map((newData) => (
                  <GridItem key={newData?._id} colSpan={1}>
                    <Box>
                      <AllPageNewsCard newData={newData} />
                    </Box>
                  </GridItem>
                ))}
              </Grid>
            </GridItem>
            <GridItem colSpan={1}>
              <Image src="Go Global School-v.gif" alt="" />
              <Image mt="10px" src="../Mart Ads -05.jpg" alt="" />
              <Box
                boxShadow="0 1px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                p="2"
                rounded="md"
                bg="white"
                marginBottom="1.5vw"
              >
                <Box fontFamily="bayon" mb="20px" mt="10px">
                  អត្ថបទពេញនិយម
                </Box>
                <Box w={width_Advertisement} h="fit-content">
                  <Poplular allNews={allnews} />
                </Box>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Center>
    </div>
  );
}
