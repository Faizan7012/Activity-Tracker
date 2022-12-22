import { Box, Heading, SimpleGrid, Text, Image } from "@chakra-ui/react";
import { images } from "./data";

function Rated() {
    
  return (
    <Box w={["100%", "100%", "90%", "90%"]} m="auto" mb="100px" mt="30px">
      <Box>
        <Heading fontSize={["20px", "20px", "25px", "30px"]} mb="20px">
          Highly rated. Globally trusted.
        </Heading>
      </Box>
      <Box>
        <Text color={"#475056"} fontWeight={"400"} fontSize="17px" mb="50px">
          DeskTime is one of the leading time tracking apps on the market
        </Text>
      </Box>

      <SimpleGrid
        columns={["2", "2", "3", "6"]}
        alignItems="center"
        spacing="30px"
      >
        {images.map((ele) => {
          return <Image key={ele} maxW="100%" src={ele} />;
        })}
      </SimpleGrid>
    </Box>
  );
}

export default Rated;
