import { Box, Image, Heading, Text, HStack, Spacer } from "@chakra-ui/react";
import Link from "next/link";

const NavBar = () => {
  return (
    <Box px={12} py={2} bg="black">
      <HStack align="center" spacing={4}>
        <Image src="/cheese-icon.svg" w={10} />
        <Heading color="white" fontSize="2xl">
          Grand Cheese Race
        </Heading>
        <Spacer />
        <HStack color="white" fontSize="2xs" fontWeight="semibold">
          <a href="/">
            <Text>HOME</Text>
          </a>
          <Text>/</Text>
          <a href="/voting">
            <Text>VOTING</Text>
          </a>
          {/* <Text>/</Text>
          <Text>PAST VICTORS</Text> */}
        </HStack>
      </HStack>
    </Box>
  );
};

export default NavBar;
