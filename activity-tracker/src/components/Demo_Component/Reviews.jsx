import {
  Flex,
  VStack,
  Span,
  Text,
  Container,
  Box,
  Center,
} from "@chakra-ui/react";
import React from "react";
import { Divider } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
function Reviews(props) {
  return (
    <Flex bg="#262c30" py={"5%"} marginTop={"80px"}>
      <Flex
        width={"100%"}
        margin="auto"
        px="12%"
        // border="1px solid red"
        justify={"space-between"}
        // justifyContent={"space-around"}
        gap={["8", "10", "10", "0"]}
        alignItems="center"
        flexDirection={["column", "column", "column", "row"]}
      >
        <Flex
          justifyContent={"center"}
          flexDirection={"column"}
          alignItems="center"
          gap={4}
          width={["100%", "100%", "100%", "32%"]}
          // paddingRight="60px"
          // border="2px solid red"
        >
          <img
            src="https://desktime.com/static/web/_common/ratings/capterra-white-logo.svg"
            alt=""
          />

          <Flex>
            <span style={{ color: "white", fontSize: "16px" }}>
              4.5 out of 5 stars from
            </span>
            <h1 style={{ color: "white", fontSize: "16px" }}>320 reviews</h1>
          </Flex>

          <Flex
            gap={3}
            // gap={["5", "5", "3", "5"]}
          >
            <StarIcon color={"white"} />
            <StarIcon color={"white"} />
            <StarIcon color={"white"} />
            <StarIcon color={"white"} />
            <StarIcon color={"white"} />
          </Flex>
        </Flex>{" "}
        {/* <Center height="100px" >
          <Divider orientation="vertical" />
        </Center> */}
        <Flex
          width={["100%", "100%", "100%", "32%"]}
          justifyContent={"center"}
          flexDirection={"column"}
          alignItems="center"
          gap={4}
        >
          <img
            src="https://desktime.com/static/web/_common/ratings/g2-crowd-white-logo.svg"
            alt=""
          />

          <Flex>
            <span style={{ color: "white", fontSize: "16px" }}>
              4.5 out of 5 stars from
            </span>
            <h1 style={{ color: "white", fontSize: "16px" }}>320 reviews</h1>
          </Flex>

          <Flex
            gap={3}
            // gap={["5", "5", "3", "5"]}
          >
            <StarIcon color={"white"} />
            <StarIcon color={"white"} />
            <StarIcon color={"white"} />
            <StarIcon color={"white"} />
            <StarIcon color={"white"} />
          </Flex>
        </Flex>
        {/* <Center height="100px">
          <Divider orientation="vertical" />
        </Center> */}
        <Flex
          width={["100%", "100%", "100%", "32%"]}
          justifyContent={"center"}
          flexDirection={"column"}
          alignItems="center"
          gap={4}
        >
          <img
            src="https://desktime.com/static/web/_common/ratings/software-advice-white-logo.svg"
            alt=""
          />

          <Flex>
            <span style={{ color: "white", fontSize: "16px" }}>
              4.5 out of 5 stars from
            </span>
            <h1 style={{ color: "white", fontSize: "16px" }}>320 reviews</h1>
          </Flex>

          <Flex gap={3} marginTop="-8px">
            <StarIcon color={"white"} />
            <StarIcon color={"white"} />
            <StarIcon color={"white"} />
            <StarIcon color={"white"} />
            <StarIcon color={"white"} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Reviews;
