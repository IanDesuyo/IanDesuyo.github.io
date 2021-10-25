import {
  Container,
  Center,
  Box,
  Text,
  Button,
  Kbd,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import NavLink from "next/link";
import Transition from "../components/transition.jsx";
import Head from "../components/head.jsx";
import { useEffect, useRef, useState } from "react";

const NotFound = () => {
  const keyDownRef = useRef(null);
  const statusRef = useRef(null);
  const statusTextRef = useRef(null);
  const textRef = useRef(null);
  const secretKeys = [..."↑↑↓↓←→←→BA"];
  const [keysTyped, setKeysTyped] = useState(0);

  const handleKeyDown = e => {
    if (keysTyped == 10) return;

    let key;
    const map = {
      ArrowUp: "↑",
      ArrowDown: "↓",
      ArrowLeft: "←",
      ArrowRight: "→",
    };

    if (map[e.key]) {
      e.preventDefault(); // prevent arrow keys from scrolling
      key = map[e.key];
    } else {
      key = e.key.toUpperCase();
    }

    if (key === secretKeys[keysTyped]) {
      setKeysTyped(prev => prev + 1);
    } else {
      setKeysTyped(0);
    }
  };

  useEffect(() => {
    keyDownRef.current.focus();
  }, []);

  useEffect(() => {
    let interval;
    let status = 404;
    let audio;
    if (keysTyped == 10) {
      interval = setInterval(() => {
        statusRef.current.innerText = ++status;
      }, 100);
      statusTextRef.current.innerText = "NYAA_FOUND";
      textRef.current.innerText = "It was nyaaaaaaaaaa!";
      audio = new Audio("/static/nyaa.mp3");
      audio.volume = 0.25;
      audio.play();
    }

    return () => {
      clearInterval(interval);
      audio?.pause();
    };
  }, [keysTyped]);

  return (
    <Transition>
      <Head title="404 NOT FOUND" />
      <Box
        ref={keyDownRef}
        w="100%"
        onKeyDown={handleKeyDown}
        tabIndex="0"
        sx={{ "&:focus": { outline: "none" } }}
        bg={
          keysTyped === secretKeys.length
            ? "url(/static/nyaa.gif) repeat"
            : useColorModeValue("white", "gray.800")
        }
      >
        <Container maxW="container.lg">
          <Center minH="95vh">
            <Box align="center">
              <Stack
                direction={{ base: "column", md: "row" }}
                fontSize="6xl"
                borderBottom="solid"
                m={1}
              >
                <Text ref={statusRef} as="span" mr={5}>
                  404
                </Text>
                <Text ref={statusTextRef} as="span">
                  NOT_FOUND
                </Text>
              </Stack>
              <Text ref={textRef}>What was here before?</Text>
              <NavLink href="/">
                <Button leftIcon={<ChevronLeftIcon />} colorScheme="teal" variant="solid" mt={10}>
                  Go back
                </Button>
              </NavLink>
            </Box>
          </Center>
          <Center>
            <Stack direction="row" spacing={1}>
              {secretKeys.map((val, index) => (
                <Kbd
                  key={index}
                  bg={index < keysTyped ? useColorModeValue("green.100", "green.800") : null}
                >
                  {val}
                </Kbd>
              ))}
            </Stack>
          </Center>
        </Container>
      </Box>
    </Transition>
  );
};

export default NotFound;
