import { Container, Box, Heading, Stack, useColorModeValue } from "@chakra-ui/react";
import ThemeButton from "./themeButton";
import NavLink from "./navLink";

const links = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/posts",
    name: "Posts",
  },
  {
    path: "/projects",
    name: "Projects",
  },
];

const Navbar = props => {
  const { path } = props;

  return (
    <Box
      w="100%"
      bg={useColorModeValue("gray.300", "gray.900")}
      position="sticky"
      top="0"
      zIndex="1"
    >
      <Container
        p={2}
        maxW="container.lg"
        display="flex"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Heading fontSize="2xl" mr={5} display={{ base: "none", md: "block" }}>
          IanDesuyo
        </Heading>
        <Stack
          spacing={5}
          direction="row"
          display={{ base: "flex", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          m={1}
        >
          {links.map((link, index) => (
            <NavLink href={link.path} path={path} key={index}>
              {link.name}
            </NavLink>
          ))}
        </Stack>
        <Box flex={1} align="right">
          <ThemeButton />
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
