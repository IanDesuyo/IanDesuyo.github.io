import {
  Box,
  Container,
  Text,
  Image,
  Center,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Terminal from "../components/terminal.jsx";
import Transition from "../components/transition.jsx";
import SocialMedia from "../components/socialMedia.jsx";
import Head from "../components/head.jsx";

const textVariants = {
  hidden: { x: -40, opacity: 0 },
  enter: { x: 0, opacity: 1 },
};

const avatarVariants = {
  hidden: { x: 40, opacity: 0 },
  enter: { x: 0, opacity: 1 },
};

const terminalVariants = {
  hidden: { y: 40, opacity: 0 },
  enter: { y: 0, opacity: 1 },
};

const greetings = [
  { text: "Hello,", transition: { delay: 0.3, duration: 0.8 } },
  { text: "I am", transition: { delay: 0.5, duration: 0.8 } },
  { text: "Ian!", transition: { delay: 0.7, duration: 0.8 } },
];

const catAbout = [
  { isInput: true, text: "cat about" },
  { isInput: false, text: "Name    : Ian" },
  { isInput: false, text: "Age     : Unknown" },
  { isInput: false, text: "Location: Taiwan" },
  { isInput: false, text: "Language:" },
  { isInput: false, text: "  - Chinese  87%" },
  { isInput: false, text: "  - English  70%" },
  { isInput: false, text: "  - Japanese 30%" },
  { isInput: false, text: "Hobbies:" },
  { isInput: false, text: "  - HoloLive🐏" },
  { isInput: false, text: "  - J-POP" },
  { isInput: false, text: "  - Anime" },
  { isInput: false, text: "  - Coding" },
  { isInput: false, text: "\n" },
  { isInput: true, text: "pip3 list" },
  { isInput: false, text: "requests\nbeautifulsoup4\nopencv-python\ndiscord.py\nfastapi" },
  { isInput: false, text: "\n" },
  { isInput: true, text: "npm list" },
  { isInput: false, text: "+-- typescript" },
  { isInput: false, text: "+-- react" },
  { isInput: false, text: "+-- react-dom" },
  { isInput: false, text: "+-- @material-ui/core" },
  { isInput: false, text: "`-- @chakra-ui/react" },
  { isInput: false, text: "\n" },
  { isInput: true, text: "docker ps" },
  { isInput: false, text: "mysql/mysql-server\nmongo\nnginx" },
];

const Index = () => {
  return (
    <Transition>
      <Head title="Hello, I am Ian!" description="This is my homepage." />
      <Container maxW="container.lg" pb={10}>
        <SimpleGrid
          mt={5}
          mb={5}
          columns={{ base: 1, md: 2 }}
          w="100%"
          minH="60vh"
          alignContent="space-between"
        >
          <Box>
            {greetings.map(({ text, transition }, index) => (
              <motion.div
                initial="hidden"
                animate="enter"
                variants={textVariants}
                transition={transition}
                key={index}
              >
                <Text fontSize="8xl" fontWeight="bold">
                  {text}
                </Text>
              </motion.div>
            ))}
          </Box>
          <motion.div
            initial="hidden"
            animate="enter"
            variants={avatarVariants}
            transition={{ delay: 0.3, duration: 1 }}
            whileHover={{ scale: 1.1, rotateX: 20, rotateY: -20 }}
          >
            <Center h="100%">
              <Image
                m={5}
                maxW="25vh"
                src="https://avatars.githubusercontent.com/u/59338745"
                borderRadius="full"
              />
            </Center>
          </motion.div>
        </SimpleGrid>

        <SocialMedia />
      </Container>

      <svg
        className="wave-warpper"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g>
          <use
            xlinkHref="#wave"
            x="47"
            y="7"
            fill={useColorModeValue(
              "var(--chakra-colors-gray-300)",
              "var(--chakra-colors-gray-700)"
            )}
          />
        </g>
      </svg>
      <Box w="100%" bg={useColorModeValue("gray.300", "gray.700")} py={10}>
        <Container maxW="container.lg">
          <motion.div
            initial="hidden"
            animate="enter"
            variants={terminalVariants}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Terminal lines={catAbout} />
          </motion.div>
        </Container>
      </Box>
    </Transition>
  );
};

export default Index;
