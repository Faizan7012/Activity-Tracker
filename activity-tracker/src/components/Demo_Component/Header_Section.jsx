import React from "react";
import { Box, Flex, Button, Text, Heading, VStack } from "@chakra-ui/react";
function Header_Section(props) {
  return (
    <Box className="header_section">
      {/* <Box w={"90%"} m={"auto"}> */}
      <Flex
        // w="100%"
        mx={"10%"}
        // pb={"30px"}
        // background={{ md: "black", lg: "red" }}
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
          // flexDirection={{ md: "column", lg: "row" }}
          border="2px solid brown"
        >
          <Flex
            flexDirection={"column"}
            border="1px solid red"
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
              // mt={"-50px"}
              textAlign={"left"}
              fontSize={["0.8rem", "0.9rem", "0.99rem", "1rem"]}
              color={"#475056"}
            >
              What’s the best way to find out if DeskTime works for you? Try it
              yourself! We’ll give you a personalized 1:1 DeskTime demo and
              answer any questions you might have.
            </Text>
            <Flex
              // border="1px solid blue"
              marginTop={"20px"}
              gap={["5", "5", "8", "10"]}
              w="80%"
            >
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
                  "1.125rem 2rem",
                ]}
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
                  "0.8125rem 1.8rem",
                ]}
              >
                START A FREE TRIAL
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          w={["100%", "100%", "100%", "50%"]}
          justify={"center"}
          // border={"1px solid red"}
        >
          <img
            src="https://desktime.com/static/web/demo/demo-of-desktime.png"
            alt=""
            w="90%"
          />
        </Flex>
      </Flex>
      {/* </Box> */}
    </Box>
  );
}

export default Header_Section;
