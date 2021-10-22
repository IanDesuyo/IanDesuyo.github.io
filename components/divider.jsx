import { Grid, GridItem, Text, useColorModeValue } from "@chakra-ui/react";

const Divider = ({ title, ...props }) => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={4} {...props}>
      <GridItem colSpan={2} h={1} bg={useColorModeValue("gray.700", "gray.100")} mt={4} />
      <Text fontSize="xl" align="center">
        {title}
      </Text>
      <GridItem
        colStart={4}
        colEnd={6}
        h={1}
        bg={useColorModeValue("gray.700", "gray.100")}
        mt={4}
      />
    </Grid>
  );
};

export default Divider;
