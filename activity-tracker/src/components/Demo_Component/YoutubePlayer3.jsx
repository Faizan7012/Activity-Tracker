import React from "react";
import { Box, Container, Flex, Text, Button } from "@chakra-ui/react";
function YoutubePlayer3(props) {
  return (
    <Box boxShadow={"0 0 .75rem rgba(0,0,0,.12)"}>
      <Flex w="80%" border={"1px solid green"} m="auto">
        <Flex w="50%" border="1px solid red">
          <Flex px={25} flexDirection={"column"}>
            <Text
              fontSize={"2.25rem"}
              textAlign={"left"}
              fontWeight={"700"}
              color={"333c43"}
              lineHeight={"2.875rem"}
              marginBottom="-5px"
            >
              DeskTime for Freelancers
            </Text>
            <Text
              color={"#475056"}
              fontWeight={"400"}
              fontSize={"17px"}
              lineHeight={"28px"}
              textAlign={"left"}
              marginBottom="-5px"
            >
              This guide explores the main features of DeskTime for freelancers
              and shows how to manage projects, create reports, and change the
              settings specific to you.
            </Text>
            <Text
              color={"#475056"}
              fontWeight={"400"}
              fontSize={"17px"}
              lineHeight={"28px"}
              // lineHeight={"1.75rem"}
              textAlign={"left"}
              marginBottom="-5px"
            >
              Using DeskTime is a great way to never again get underpaid for the
              time invested in your clients' projects.
            </Text>
            <Flex border={"1px solid brown"} gap={8} alignItems={"center"}>
              <img
                width="5%"
                height="40%"
                src="https://i.ibb.co/s9kPpwq/svgcheck.png"
                alt=""
              />
              <Text
                color={"#475056"}
                fontWeight={"400"}
                fontSize={"17px"}
                // lineHeight={"1.75rem"}
                textAlign={"left"}
              >
                Track time spent on specific projects.
              </Text>
            </Flex>
            <Flex border={"1px solid brown"} gap={8} alignItems={"center"}>
              <img
                width="5%"
                height="40%"
                src="https://i.ibb.co/s9kPpwq/svgcheck.png"
                alt=""
              />
              <Text
                color={"#475056"}
                fontWeight={"400"}
                fontSize={"17px"}
                // lineHeight={"1.75rem"}
                textAlign={"left"}
              >
                Use the Cost calculation feature.
              </Text>
            </Flex>
            <Flex border={"1px solid brown"} gap={8} alignItems={"center"}>
              <img
                width="5%"
                height="40%"
                src="https://i.ibb.co/s9kPpwq/svgcheck.png"
                alt=""
              />
              <Text
                color={"#475056"}
                fontWeight={"400"}
                fontSize={"17px"}
                // lineHeight={"1.75rem"}
                textAlign={"left"}
              >
                Boost productivity to raise your income.
              </Text>
            </Flex>
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
        <Flex w="50%" alignItems={"center"} justifyContent={"center"}>
          <iframe
            width="520"
            height="315"
            allowFullScreen="true"
            allowTransparency="true"
            allow-aria-modal="true"
            border="none"
            src="https://www.youtube.com/embed/uFl2-NstWtc?autoplay=1"
          ></iframe>
        </Flex>
      </Flex>
    </Box>
  );
}

export default YoutubePlayer3;
