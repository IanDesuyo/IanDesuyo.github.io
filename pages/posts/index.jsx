import { Container, Text } from "@chakra-ui/react";
import Transition from "../../components/transition";
import Head from "../../components/head";

const Posts = () => {
  return (
    <Transition>
      <Head title="My Posts" />
      <Container>
        <Text>Nothing here...</Text>
      </Container>
    </Transition>
  );
};

export default Posts;
