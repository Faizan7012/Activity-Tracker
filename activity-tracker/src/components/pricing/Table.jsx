import { GridItem, Box, Heading, Grid, Center } from "@chakra-ui/react";
import Img from "./img";

function TablePrice({ cl, p1, p2, p3, p4, p5 }) {
  return (
    <Box
      bg={cl ? "#c2c5c7 !important" : "white"}
      borderRadius="6px"
      w="100%"
      p="20px"
      color="#475056"
      mb="10px"
    >
      <Grid
        templateColumns="repeat(5, 1fr)"
        alignItems="center"
        justifyContent="center"
      >
        <GridItem textAlign="center">
          <Heading fontSize="16px" textAlign="left">
            <Img p={p1} />
          </Heading>
        </GridItem>
        <GridItem>
          <Center>
            {" "}
            <Heading fontSize="16px">
              <Img p={p2} />
            </Heading>
          </Center>
        </GridItem>
        <GridItem>
          <Center>
            <Heading fontSize="16px">
              <Img p={p3} />
            </Heading>
          </Center>
        </GridItem>
        <GridItem>
          <Center>
            <Heading fontSize="16px">
              <Img p={p4} />
            </Heading>
          </Center>
        </GridItem>
        <GridItem>
          <Center>
            <Heading fontSize="16px">
              <Img p={p5} />
            </Heading>
          </Center>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default TablePrice;
