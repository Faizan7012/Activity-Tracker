import React from "react";
import { Box, Flex, Button, Text } from "@chakra-ui/react";
function Headersection() {
  return (
    <Box
      backgroundImage="url(
        https://desktime.com/static/web/_common/intro-background.png
      )"
      backgroundRepeat={"no-repeat"}
      backgroundSize="cover"
      padding={"160px 0px 160px 0px"}
    >
      <Flex
        mx={"10%"}
        flexDirection={[
          "column-reverse",
          "column-reverse",
          "column-reverse",
          "row",
        ]}
      >
        <Flex
          w={["100%", "100%", "100%", "50%"]}
          justify="center"
          px="25px"
          alignItems={"center"}
        >
          <Flex
            flexDirection={"column"}
            alignItems="center"
            justify="center"
            gap={"20px"}
            justifyContent={"space-between"}
          >
            <Text
              w={["90%", "100%", "90%", "100%"]}
              textAlign={"start"}
              fontWeight={"700"}
              fontSize={["1.2rem", "1.5rem", "1.9rem", "2.2rem"]}
              color={"#333c43"}
              mb="-0.5px"
            >
              Get a super quick in-depth demo of DeskTime
            </Text>
            <Text
              w={["90%", "100%", "90%", "100%"]}
              textAlign={"left"}
              fontSize={["0.8rem", "0.9rem", "0.99rem", "1rem"]}
              color={"#475056"}
            >
              What’s the best way to find out if DeskTime works for you? Try it
              yourself! We’ll give you a personalized 1:1 DeskTime demo and
              answer any questions you might have.
            </Text>
            <Flex marginTop={"20px"} gap={["4", "5", "8", "10"]} w="80%">
              <Button
                fontSize={["0.8rem", "0.8rem", "1.115rem", "1.115rem"]}
                border="none"
                borderRadius={5}
                bg={"#4ea819"}
                color={"#fff"}
                padding={[
                  "0.5125rem  1.4rem",
                  "0.5125rem  1.4rem",
                  "0.8125rem 1.8rem",
                  "1.5rem 2rem",
                ]}
                _hover={{ bg: "#43762b", color: "white" }}
                fontWeight={"600"}
              >
                {" "}
                BOOK A DEMO
              </Button>
              <Button
                fontWeight={"600"}
                fontSize={["0.8rem", "0.8rem", "1.115rem", "1.115rem"]}
                border="0.5px solid grey"
                borderRadius={5}
                bg={"white"}
                color={"#475056"}
                padding={[
                  "0.5125rem  1.4rem",
                  "0.5125rem 1.4rem",
                  "0.8125rem 1.8rem",
                  "1.5rem 2rem",
                ]}
              >
                START A FREE TRIAL
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex w={["100%", "100%", "100%", "50%"]} justify={"center"}>
          <img
            src="https://desktime.com/static/web/demo/demo-of-desktime.png"
            alt=""
            w="90%"
          />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Headersection;
