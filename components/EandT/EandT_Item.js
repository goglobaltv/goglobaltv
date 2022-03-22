import React from "react";
import AllPageNewsCard from "../AllPageNewsCard";
import Poplular from "../Poplular";

import {
  Box,
  Center,
  Grid,
  GridItem,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import RightAdvertise from "../Advertisement/RightAdvertise";
import Weather from "../Weather";

export default function EandT_Item({ allNews }) {
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
        <Box w={display_Box} mt="10" mb="20">
          <Box
            // borderBottom="40px solid #274E8D"
            // borderRight="10px solid transparent"
            // h="0px"
            // w="220px"
            textAlign="center"
            fontSize={title}
            fontFamily="NiDA Bayon"
            color="white"
            borderRadius="0px 15px 0px 0px"
            bg="brand.200"
            w="210px"
            h="40px"
          >
            {/* <Box pt="6px"> */}
            កម្សាន្ដ និងទេសចរណ៍
            {/* </Box> */}
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
                {allNews
                  ?.filter(
                    (newData) =>
                      newData?.newsCategory?.name ===
                      "Entertainment and Tourism"
                  )
                  .map((newData) => (
                    <GridItem colSpan={1} key={newData?._id}>
                      <Box>
                        <AllPageNewsCard newData={newData} />
                      </Box>
                    </GridItem>
                  ))}
              </Grid>
            </GridItem>
            <GridItem colSpan={1}>
              <Weather />
              {/* <Image src="Go Global School-v.gif" alt="Advertise gift" />
              <Image mt="10px" src="../Mart Ads -05.jpg" alt="mart advertise" /> */}
              <SimpleGrid mt="24px" columns={1} spacing={6}>
                <Box>
                  <RightAdvertise />
                </Box>
              </SimpleGrid>
              <Box
                boxShadow="0 1px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                p="2"
                rounded="md"
                bg="white"
                mt="24px"
              >
                <Box fontFamily="bayon" mb="20px" mt="10px">
                  អត្ថបទពេញនិយម
                </Box>
                <Box w={width_Advertisement} h="fit-content">
                  <Poplular />
                </Box>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Center>
    </div>
  );
}
