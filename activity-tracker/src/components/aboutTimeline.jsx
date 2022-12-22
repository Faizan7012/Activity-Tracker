import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
function AboutTimeline({ img, date, heading, text, tmp, isA }) {
  return (
    <Flex
      mb="30px"
      w="90%"
      m="auto"
      justifyContent="center"
      alignItems="center"
      flexDirection={
        isA
          ? ["column-reverse", "column-reverse", "column-reverse", "row"]
          : [
              "column-reverse",
              "column-reverse",
              "column-reverse",
              "row-reverse",
            ]
      }
      gap="30px"
    >
      <Flex
        w={["100%", "100%", "100%", "50%"]}
        flexDirection="column"
        justifyContent="left"
        alignItems="center"
      >
        <Box>
          <Text
            fontWeight="800"
            Height="20px"
            color="#4ea819"
            mb="30px"
            textAlign="center"
          >
            {date}
          </Text>
          <Heading
            textAlign="left"
            fontSize={["17px", "22px", "25px"]}
            lineHeight="40px"
            mb="30px"
            color="#333c43"
          >
            {heading}
          </Heading>
          <Text textAlign="left" lineHeight="20px" color="#475056" mb="30px">
            {text}
          </Text>
        </Box>
      </Flex>
      <Flex
        display={["none", "none", "none", "flex"]}
        flexDirection="column"
        gap="20px"
        justifyContent="center"
        alignItems="center"
      >
        <Flex justifyContent="center" alignItems="center">
          <Box w="30px" h="30px" borderRadius="50%" bg="#4ea819">
            <Flex justifyContent="center" alignItems="center">
              <Box
                w="15px"
                h="15px"
                mt="7px"
                borderRadius="50%"
                bg="#fff"
              ></Box>
            </Flex>
          </Box>
        </Flex>

        <Box h="330px" borderRight="5px dotted gray"></Box>
        <Flex justifyContent="center" alignItems="center">
          <Box
            display={tmp ? "none" : "block"}
            w="30px"
            h="30px"
            borderRadius="50%"
            bg="#4ea819"
          >
            <Flex justifyContent="center" alignItems="center">
              <Box
                w="15px"
                h="15px"
                mt="7px"
                borderRadius="50%"
                bg="#fff"
              ></Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
      <Flex
        w={["100%", "100%", "100%", "50%"]}
        m="auto"
        justifyContent="center"
      >
        <Image maxW="100%" src={img} />
      </Flex>
    </Flex>
  );
}

export default AboutTimeline;
