import { Container, Flex, Text } from "@chakra-ui/react";
import React from "react";

function FounderCard(props) {
  return (
    <Flex
      boxShadow={
        " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
      }
      borderRadius="7px"
      //   border="1px solid green"
      //   alignItems={"center"}
      flexDirection={"column"}
      h={"450px"}
      w="250px"
      padding="16px"
    >
      <Flex gap={12}>
        <Flex
        // border={"1px solid red"}
        >
          <img
            width="60px"
            borderRadius="50%"
            style={{ borderRadius: "50%" }}
            height="60px"
            src="https://desktime.com/static/web/testimonial-images/samir.jpg"
            alt="samir"
          />
        </Flex>
        <Flex
          // border={"1px solid red"}
          py={5}
          flexDirection={"column"}
        >
          <Flex justify={"flex-start"} gap={6} alignItems="center">
            <Container
              fontSize={"20px"}
              fontWeight={"bolder"}
              color={"#333c43"}
              lineHeight={"24px"}
            >
              VM Samir
            </Container>
            <img
              src="https://desktime.com/assets/img/bs4/icons/social/linkedin.svg"
              alt=""
            />
          </Flex>
          <Flex flexDirection={"column"}>
            <Container
              color={"#475056"}
              fontWeight="500"
              fontSize={"16px"}
              textAlign={"left"}
            >
              CIO
            </Container>
            <Container
              color={"#475056"}
              fontWeight="700"
              textDecoration={"underline"}
              fontSize={"16px"}
              textAlign={"left"}
            >
              Rustomjee
            </Container>
          </Flex>
        </Flex>
      </Flex>
      <Flex>
        <Text color={"#475056"} fontSize={"16px"} textAlign={"left"}>
          Given the pandemic, we were looking for contactless options to replace
          our legacy time & attendance management systems, which required manual
          input from users. We found DeskTime to be an effective tool that
          provides undisputable insights to both end-users & reporting managers,
          establishes transparency, and does not violate end-user privacy.
        </Text>
      </Flex>
    </Flex>
  );
}

export default FounderCard;
