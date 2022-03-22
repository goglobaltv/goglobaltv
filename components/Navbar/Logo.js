import { Box, Center, Flex, Image, Spacer, Link } from "@chakra-ui/react";
import TopAdvertise from "../Advertisement/TopAdvertise";

export default function Logo() {
  const w_Box = {
    base: "95%",
    md: "90%",
    lg: "85%",
    "2xl": "70%",
  };
  const w_Logo = {
    base: "50vw",
    md: "28vw",
    lg: "22vw",
    xl: "16vw",
    "2xl": "14vw",
  };
  const display_Advertisement = {
    base: "none",
    lg: "flex",
  };

  return (
    <div>
      <Center position="relative">
        <Flex w={w_Box} mb="5px">
          <Link href="/">
            <Box mt="10px">
              <Image w={w_Logo} src="../GoGlobal TV_2new.png" alt="Logo" />
            </Box>
          </Link>
          <Spacer />
          <Box mt="5px" mb="5px" display={display_Advertisement}>
            <TopAdvertise />
          </Box>
        </Flex>
      </Center>
    </div>
  );
}
