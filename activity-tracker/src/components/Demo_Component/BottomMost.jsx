import { Text, Flex, Button } from "@chakra-ui/react";
import React from "react";

function BottomMost(props) {
  return (
    <Flex bg={"#4ea819"} py="70px" mb="100px">
      {/* <Flex w="80%" m="auto"> */}
      <Flex
        w="60%"
        m="auto"
        // border={"1px solid red"}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <Text
          fontSize={{ base: "24px", md: "24px", lg: "36px" }}
          fontWeight={"700"}
        >
          Join 400,000+ users already managing their time with the DeskTime app
        </Text>
        <Flex
          // border="1px solid red"
          justify={"center"}
          gap={"20px"}
        >
          <input
            // w="50px"
            style={{
              width: "300px",
              padding: "9px 12px",
              color: "#262c30",
              fontSize: "18px",
            }}
            placeholder="Your work mail"
            type="text"
          />
          <Button
            fontSize={"1.115rem"}
            border="1px solid white"
            borderRadius={5}
            bg={"#4ea819"}
            color={"#fff"}
            padding={"0.8125rem 1.8rem"}
            fontWeight={"600"}
          >
            {" "}
            GET STARTED
          </Button>
        </Flex>
      </Flex>
    </Flex>
    // </Flex>
  );
}

export default BottomMost;
