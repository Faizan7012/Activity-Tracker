import React from "react";
import { Container, Flex, Button } from "@chakra-ui/react";
function BottomUp(props) {
  return (
    <Flex my={70}>
      <Flex w="80%" m="auto" border={"1px solid black"}>
        <Flex
          w="50%"
          justify={"center"}
          alignItems={"center"}
          border="1px solid red"
        >
          <img src="https://desktime.com/static/web/demo/notebook.png" alt="" />
        </Flex>
        <Flex w="50%" border="1px solid red" alignItems={"center"}>
          <Flex flexDirection={"column"}>
            <Container
              fontSize={"36px"}
              fontWeight={"700"}
              color={"#333c43"}
              textAlign={"left"}
            >
              Not convinced yet?
            </Container>{" "}
            <Container
              fontSize={"36px"}
              fontWeight={"700"}
              color={"#333c43"}
              textAlign={"left"}
            >
              Check out our self-guided demo
            </Container>
            <Container
              marginBottom={"16px"}
              marginTop={"15px"}
              fontSize={"18px"}
              color={"#475054"}
              textAlign={"left"}
            >
              If you want the full scope of what you’re getting once you sign
              up, visit our demo account. You can try out all the features
              DeskTime has to offer.
            </Container>
            <Flex>
              <Button
                fontSize={"1.115rem"}
                border="0.8PX SOLID GREY"
                borderRadius={5}
                bg={"#4ea819"}
                color={"#fff"}
                padding={"16px 22px"}
                fontWeight={"600"}
              >
                {" "}
                DEMO ACCOUNT
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default BottomUp;
