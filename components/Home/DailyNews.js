import {
  Box,
  Center,
  Grid,
  GridItem,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import Poplular from "../Poplular";
// import DailyNewsHightlight from "./AllNewsHightlight/DailyNewsHightlight";
import EandTHightlight from "./AllNewsHightlight/EandTHightlight";
import BusinessHightlight from "./AllNewsHightlight/BusinessHightlight";
import AgricultureHightlight from "./AllNewsHightlight/AgricultureHightlight";
import InternationalHightlight from "./AllNewsHightlight/InternationalHightlight";
import EducationHightlight from "./AllNewsHightlight/EducationHightlight";
import NationalHightlight from "./AllNewsHightlight/NationalHightlight";
import TechnologyHightlight from "./AllNewsHightlight/TechnologyHightlight";
import HealthHightlight from "./AllNewsHightlight/HealthHightlight";
import SportHightlight from "./AllNewsHightlight/SportHightlight";
import Weather from "../Weather";
import RightAdvertise from "../Advertisement/RightAdvertise";

export default function DailyNews({ allNews }) {
  const poplularTitle = {
    base: "4.5vw",
    sm: "1.5vw",
    md: "1.4vw",
    lg: "1.3vw",
    xl: "1.2vw",
    "2xl": "1vw",
  };
  const display_Box = {
    base: "95%",
    sm: "95%",
    md: "90%",
    lg: "85%",
    xl: "85%",
    "2xl": "70%",
  };
  const mt_Popular = {
    base: "0px",
    sm: "0px",
    md: "60px",
    lg: "60px",
    xl: "50px",
    "2xl": "40px",
  };

  return (
    <div>
      <Center>
        <Box width={display_Box} mt="30px" mb="70px">
          <Grid
            templateColumns={{ base: "1fr", lg: "2.5fr 1fr", md: "2fr 1fr" }}
            gap={4}
          >
            <GridItem colSpan={1}>
              {/* <DailyNewsHightlight allDailyNews={allDailyNews} /> */}
              <NationalHightlight allDailyNews={allNews} />
              <InternationalHightlight allDailyNews={allNews} />
              <EducationHightlight allDailyNews={allNews} />
              <BusinessHightlight allDailyNews={allNews} />
              <AgricultureHightlight allDailyNews={allNews} />
              <TechnologyHightlight allDailyNews={allNews} />
              <EandTHightlight allDailyNews={allNews} />
              <HealthHightlight allDailyNews={allNews} />
              <SportHightlight allDailyNews={allNews} />
            </GridItem>
            <GridItem mt={mt_Popular} colSpan={1}>
              <Weather />

              {/* <Image mt="10px" src="../Go Global School-v.gif" alt="" /> */}
              {/* <Image mt="20px" src="../Mart Ads -05.jpg" alt="" /> */}
              <SimpleGrid mt="24px" columns={1} spacing={6}>
                <Box>
                  <RightAdvertise />
                </Box>
              </SimpleGrid>
              <Box
                mt="5px"
                boxShadow="0 1px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                p="5px"
                rounded="md"
                bg="white"
                marginTop="1.5vw"
                marginBottom="1.5vw"
              >
                <Box
                  fontFamily="NiDA Bayon"
                  mb="10px"
                  fontSize={poplularTitle}
                  p="5px"
                >
                  អត្ថបទពេញនិយម
                </Box>
                <Poplular />
              </Box>
              {/* <Image mt="10px" src="../Go Global School-v.gif" alt="" />
              <Image src="../Mart Ads -05.jpg" alt="" /> */}
            </GridItem>
          </Grid>
        </Box>
      </Center>
    </div>
  );
}
