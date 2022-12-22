import React from "react";
import { Box, Flex, Text, Button, Stack } from "@chakra-ui/react";

function YoutubePlayer1() {
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
                DeskTime for Teams
              </Text>
              <Text
                color={"#475056"}
                fontWeight={"400"}
                lineHeight={"28px"}
                textAlign={"left"}
                marginBottom="-5px"
              >
                Watch this tutorial to learn how to keep track of your
                employees' work with the Admin features of DeskTime, find out
                how to add team members, manage work schedules, create reports,
                and more.
              </Text>
              <Text
                color={"#475056"}
                fontWeight={"400"}
                lineHeight={"28px"}
                textAlign={"left"}
                marginBottom="-5px"
              >
                With DeskTime you can plan and create shifts, manage absences
                and use the Project tracking feature to see who is working on
                what and for how long.
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
                    Keep track of processes and goals.
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
                    Set Automatic time & project tracking.
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
                    Grasp shift and absence scheduling.
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
      </Flex>
    </Flex>
  );
}

export default YoutubePlayer1;
