import { Flex, VStack, Span, Text, Container } from "@chakra-ui/react";
import React from "react";
import { StarIcon } from "@chakra-ui/icons";
function Reviews(props) {
  return (
    <Flex bg="#262c30" py={"5%"} marginTop={"80px"}>
      <Flex
        // border="1px solid red"
        m="auto"
        justifyContent={"space-between"}
        w="70%"
      >
        <Flex
          w="33%"
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
          px={20}
          borderRight="2px solid #5c6369"
        >
          <img
            width="50%"
            src="https://desktime.com/static/web/_common/ratings/capterra-white-logo.svg"
            alt=""
          />

          <Text fontSize={"16px"} letterSpacing={-0.5} color={"white"}>
            4.5 out of 5 stars from{" "}
            <span style={{ fontWeight: "600" }}>320 reviews</span>
          </Text>

          <Flex gap={5}>
            <StarIcon color={"white"} />
            <StarIcon color={"white"} />
            <StarIcon color={"white"} />
            <StarIcon color={"white"} />
            <StarIcon color={"white"} />
          </Flex>
        </Flex>

        <Flex
          w="33%"
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
          px={20}
          borderRight="2px solid #5c6369"
        >
          <img
            width="50%"
            src="https://desktime.com/static/web/_common/ratings/g2-crowd-white-logo.svg"
            alt=""
          />

          <Text fontSize={"16px"} letterSpacing={-0.5} color={"white"}>
            4.5 out of 5 stars from{" "}
            <span style={{ fontWeight: "600" }}>146 reviews</span>
          </Text>

          <Flex gap={5}>
            <StarIcon color={"white"} />
            <StarIcon color={"white"} />
            <StarIcon color={"white"} />
            <StarIcon color={"white"} />
            <StarIcon color={"white"} />
          </Flex>
        </Flex>
        <Flex
          w="33%"
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
          px={20}
          //   border="2px solid #5c6369"
        >
          <img
            width="100%"
            src="https://desktime.com/static/web/_common/ratings/software-advice-white-logo.svg"
            alt=""
          />

          <Text fontSize={"16px"} letterSpacing={-0.5} color={"white"}>
            4.5 out of 5 stars from{" "}
            <span style={{ fontWeight: "600" }}>320 reviews</span>
          </Text>

          <Flex gap={5}>
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
