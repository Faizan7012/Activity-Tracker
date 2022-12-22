import React from "react";
import { Heading, Flex, Button, Text } from "@chakra-ui/react";

function SingleCard(props) {
  const { img, heading, text, buttonText } = props;

  return (
    <Flex
      px={"10px"}
      height={["300px", "250px", "250px", "325px"]}
      m="auto"
      flexDirection={"column"}
      justifyContent={"space-between"}
    >
      <Flex justify="center">
        {" "}
        <img src={img} alt="" />
      </Flex>
      <Heading
        color={"#333C43"}
        fontSize={"1.4rem"}
        lineHeight={["1rem", "1rem", "2rem", "2rem"]}
      >
        {heading}
      </Heading>
      <Text
        fontSize={["1rem", "1.1rem", "0.9999rem", "1rem"]}
        lineHeight={"1.75rem"}
        color={"#475056"}
        textAlign={"center"}
      >
        {text}
      </Text>
      <Flex mt={"10px"} justify={"center"}>
        <Button
          padding={"1px 10px"}
          borderRadius={6}
          fontWeight="600"
          color={"#475056"}
          background="#fff"
          border="0.8px solid grey"
        >
          {buttonText}
        </Button>
      </Flex>
    </Flex>
  );
}

export default SingleCard;
