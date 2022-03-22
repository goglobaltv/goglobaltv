import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Text, Box, Center } from "@chakra-ui/react";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, [0]);

  return (
    <Box mt="180" w="100%" h="250px" p={4} color="white">
      <Center>
        <Box pr="20px" pl="20px" pb="5px" pt="5px" borderRadius="5px"></Box>
        <Text fontFamily="bayon" fontSize="40px" color="brand.200">
          សូមអភ័យទោស!
          ទំព័រដែលលោកអ្នកកំពុងស្វែងរកមិនមាននៅក្នុងគេហទំព័រយើងខ្ញុំទេ...
        </Text>
      </Center>
    </Box>
  );
}
