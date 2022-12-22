import React from "react";
import { Box, Flex, Text, Button, Stack } from "@chakra-ui/react";
function YoutubePlayer1(props) {
  return (
    <Flex boxShadow={"0 0 .75rem rgba(0,0,0,.12)"} w="100%">
      <Flex
        py="50px"
        w="80%"
        flexDirection={[
          "column-reverse",
          "column-reverse",
          "column-reverse",
          "row",
        ]}
        m="auto"
        alignItems={"center"}
      >
        <Flex
          w={["100%", "100%", "100%", "50%"]}
          py="60px"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box
            as="iframe"
            width={["90%", "90%", "80%", "90%"]}
            height={["315px", "315px", "315px", "315px"]}
            allowFullScreen={true}
            border="none"
            src="https://www.youtube.com/embed/uFl2-NstWtc?autoplay=1"
          ></Box>
        </Flex>

        <Flex w={["100%", "100%", "100%", "50%"]}>
          <Flex
            px={["25", "25", "20", "25"]}
            justifyContent="space-between"
            flexDirection={"column"}
          >
            <Stack spacing="16px">
              <Text
                fontSize={["24", "24", "36", "36"]}
                textAlign={"left"}
                fontWeight={"700"}
                color={"333c43"}
                lineHeight={"2.875rem"}
                marginBottom="-5px"
              >
                DeskTime for Employees
              </Text>
              <Text
                color={"#475056"}
                fontWeight={"400"}
                lineHeight={"28px"}
                textAlign={"left"}
                marginBottom="-5px"
              >
                If you're working in a company that tracks your work hours with
                DeskTime, this video guide is for you.
              </Text>
              <Text
                color={"#475056"}
                fontWeight={"400"}
                lineHeight={"28px"}
                textAlign={"left"}
                marginBottom="-5px"
              >
                Learn what DeskTime’s time tracking app is, how to navigate it,
                use its features, such as Projects, Work Schedules, Absence
                calendar, Reports, and more.
              </Text>
              <Stack spacing={"10px"}>
                <Flex gap={3} alignItems={"center"}>
                  <img
                    width="5%"
                    height="40%"
                    src="https://i.ibb.co/s9kPpwq/svgcheck.png"
                    alt=""
                  />
                  <Text color={"#475056"} fontWeight={"400"} textAlign={"left"}>
                    Identify your computer usage habits.
                  </Text>
                </Flex>
                <Flex gap={3} alignItems={"center"}>
                  <img
                    width="5%"
                    height="40%"
                    src="https://i.ibb.co/s9kPpwq/svgcheck.png"
                    alt=""
                  />
                  <Text color={"#475056"} fontWeight={"400"} textAlign={"left"}>
                    Improve upon work plan & execution.
                  </Text>
                </Flex>
                <Flex gap={3} alignItems={"center"}>
                  <img
                    width="5%"
                    height="40%"
                    src="https://i.ibb.co/s9kPpwq/svgcheck.png"
                    alt=""
                  />
                  <Text
                    color={"#475056"}
                    fontWeight={"400"}
                    fontSize={["17px", "17px", "17px", "17px"]}
                    textAlign={"left"}
                  >
                    See what's causing constraints in your day.
                  </Text>
                </Flex>
              </Stack>
            </Stack>
            <Flex
              flexDirection={["column", "row", "row", "row"]}
              marginTop={"20px"}
              gap={["7", "12", "18", "18"]}
            >
              <Button
                fontWeight={"600"}
                fontSize={["13px", "16px", "16px", "16px"]}
                borderRadius={5}
                bg={"#4ea819"}
                color={"#fff"}
                border="none"
                padding={["8px 24px", "8px 24px", "13px 32px", "13px 32px"]}
              >
                START A FREE TRIAL
              </Button>
              <Button
                fontSize={["13px", "16px", "16px", "16px"]}
                border="0.5px solid grey"
                borderRadius={5}
                bg={"white"}
                color={"#475056"}
                padding={["8px 24px", "8px 24px", "13px 32px", "13px 32px"]}
                fontWeight={"600"}
              >
                {" "}
                BOOK A DEMO
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default YoutubePlayer1;
