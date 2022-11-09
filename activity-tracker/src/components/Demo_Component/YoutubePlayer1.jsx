import React from "react";
import { Box, Flex, Text, Button, Stack } from "@chakra-ui/react";
function YoutubePlayer1(props) {
  return (
    <Flex
      py="60px"
      boxShadow={"0 0 .75rem rgba(0,0,0,.12)"}
      // w="80%"
      flexDirection={[
        "column-reverse",
        "column-reverse",
        "column-reverse",
        "row",
      ]}
      border={"1px solid green"}
      m="auto"
      mx="10%"
      alignItems={"center"}
    >
      <Flex w={["100%", "100%", "100%", "50%"]} border="1px solid red">
        <Flex
          px={["25", "25", "20", "25"]}
          justifyContent="space-between"
          flexDirection={"column"}
        >
          <Stack spacing="16px">
            <Text
              fontSize={["28", "28", "36", "36"]}
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
              fontSize={["17px", "17px", "17px", "17px"]}
              lineHeight={"28px"}
              textAlign={"left"}
              marginBottom="-5px"
            >
              Watch this tutorial to learn how to keep track of your employees'
              work with the Admin features of DeskTime, find out how to add team
              members, manage work schedules, create reports, and more.
            </Text>
            <Text
              color={"#475056"}
              fontWeight={"400"}
              fontSize={["17px", "17px", "17px", "17px"]}
              lineHeight={"28px"}
              textAlign={"left"}
              marginBottom="-5px"
            >
              With DeskTime you can plan and create shifts, manage absences and
              use the Project tracking feature to see who is working on what and
              for how long.
            </Text>
            <Stack spacing={"10px"}>
              <Flex
                // border={"1px solid brown"}

                gap={3}
                alignItems={"center"}
              >
                <img
                  width="5%"
                  height="40%"
                  src="https://i.ibb.co/s9kPpwq/svgcheck.png"
                  alt=""
                />
                <Text
                  border="1px solid brown"
                  color={"#475056"}
                  fontWeight={"400"}
                  fontSize={["17px", "17px", "17px", "17px"]}
                  textAlign={"left"}
                >
                  Keep track of processes and goals.
                </Text>
              </Flex>
              <Flex
                // border={"1px solid brown"}

                gap={3}
                alignItems={"center"}
              >
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
                  Set Automatic time & project tracking.
                </Text>
              </Flex>
              <Flex
                // border={"1px solid brown"}

                gap={3}
                alignItems={"center"}
              >
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
            // border="1px solid blue"
            gap={20}
          >
            <Button
              fontWeight={"600"}
              fontSize={"1.05rem"}
              borderRadius={5}
              bg={"#4ea819"}
              color={"#fff"}
              border="none"
              padding={"13px 32px"}
            >
              START A FREE TRIAL
            </Button>
            <Button
              fontSize={"1.115rem"}
              border="0.5px solid grey"
              borderRadius={5}
              bg={"white"}
              color={"#475056"}
              padding={"0.8125rem 1.8rem"}
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
        <iframe
          width={["520px", "520px", "300px", "400px"]}
          height={["315px", "315px", "315px", "315px"]}
          allowFullScreen="true"
          border="none"
          src="https://www.youtube.com/embed/uFl2-NstWtc?autoplay=1"
        ></iframe>
      </Flex>
    </Flex>
  );
}

export default YoutubePlayer1;
