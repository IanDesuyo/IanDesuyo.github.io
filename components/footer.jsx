import { Box, Container, useColorModeValue, Text, Link, Center } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box w="100%" p={1} position="relative">
      <Container>
        <Center>
          <Text>
            &copy; 2021 <Link href="https://github.com/IanDesuyo">IanDesuyo</Link>
          </Text>
          <Text mx={2}>|</Text>
          <Text>
            <Link href="https://github.com/IanDesuyo/iandesuyo.github.io">Source</Link>
          </Text>
        </Center>
      </Container>
    </Box>
  );
};

export default Footer;
