import { Container, Center, Box, Text, Button } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import NavLink from "next/link";
import Transition from "../components/transition.jsx";
import Head from "../components/head.jsx";

const NotFound = () => {
  return (
    <Transition>
      <Head title="404 NOT FOUND" />
      <Container>
        <Center minH="90vh">
          <Box align="center">
            <Text fontSize="6xl" borderBottom="solid" m={1}>
              404 NOT FOUND
            </Text>
            <Text>What was here before?</Text>
            <NavLink href="/">
              <Button leftIcon={<ChevronLeftIcon />} colorScheme="teal" variant="solid" mt={5}>
                Go back
              </Button>
            </NavLink>
          </Box>
        </Center>
      </Container>
    </Transition>
  );
};

export default NotFound;
