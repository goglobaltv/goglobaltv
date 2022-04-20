import SmallCard from "../SmallCard";
import NewsCard from "../NewsCard";
import { Box, Grid, GridItem, Link } from "@chakra-ui/react";
import SmallCardItem from "../SmallCardItem";

export default function SportHightlight({ allDailyNews }) {
  const title = {
    base: "20px",
    sm: "20px",
    md: "22px",
    lg: "22px",
    xl: "25px",
    "2xl": "25px",
  };
  const mt = {
    base: "3vw",
    sm: "3vw",
    md: "0",
    lg: "0",
    xl: "0",
    "2xl": "0",
  };

  return (
    <>
      <Link color="brand.200" href="/sport">
        <Box
          mt="30px"
          w="140px"
          fontSize={title}
          fontFamily="NiDA Bayon"
          textAlign="center"
          color="white"
          borderRadius="0px 15px 0px 0px"
          bg="brand.200"
          h="40px"
          pt="6px"
        >
          ព័ត៌មានកីឡា
        </Box>
      </Link>
      <Box bg="brand.200" mb="20px" h="4px" w="100%" />
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr", md: "1fr" }} gap={4}>
        <Box>
          {allDailyNews
            ?.filter((newData) => newData?.newsCategory?.name === "Sport")
            .slice(0, 1)
            .map((newData) => (
              <GridItem key={newData?._id} colSpan={1}>
                <Box>
                  <NewsCard dailyNews={newData} />
                </Box>
              </GridItem>
            ))}
        </Box>
        <Box w="100%" h="fit-content" overflow="hidden" mt={mt}>
          {allDailyNews
            .filter((newData) => newData?.newsCategory?.name === "Sport")
            .slice(0, 3)
            .map((newData) => (
              <SmallCardItem key={newData?._id} newData={newData} />
            ))}
        </Box>
      </Grid>
    </>
  );
}
