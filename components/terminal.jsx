import { Box, Text } from "@chakra-ui/react";

const TerminalInput = ({ text, ...props }) => {
  return (
    <Box fontSize="2xl" display="flex" {...props}>
      <Text textColor="#98C379">ian@ubuntu</Text>
      <Text>:</Text>
      <Text textColor="#61AFEF">~</Text>
      <Text>$ {text}</Text>
    </Box>
  );
};

const Terminal = ({ lines }) => {
  return (
    <Box bg="black" borderRadius="3xl" p={5} fontSize="xl" textColor="white">
      {lines.map(({ isInput, text }, index) =>
        isInput ? (
          <TerminalInput text={text} key={index} />
        ) : (
          <Text as="pre" key={index}>
            {text}
          </Text>
        )
      )}
    </Box>
  );
};

export default Terminal;
