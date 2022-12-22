import React from "react";
import { Container, Flex, Button } from "@chakra-ui/react";

function BottomUp() {
  return (
    <Flex my={70}>
      <Flex
        w="80%"
        flexDirection={["column", "column", "column", "row"]}
        m="auto"
      >
        <Flex
          width={["100%", "100%", "100%", "50%"]}
          justify={"center"}
          alignItems={"center"}
        >
          <img src="https://desktime.com/static/web/demo/notebook.png" alt="" />
        </Flex>
        <Flex width={["100%", "100%", "100%", "50%"]} alignItems={"center"}>
          <Flex flexDirection={"column"}>
            <Container
              fontSize={["26px", "30px", "33px", "36px"]}
              fontWeight={"700"}
              color={"#333c43"}
              textAlign={"left"}
            >
              Not convinced yet?
            </Container>{" "}
            <Container
              fontSize={["26px", "30px", "33px", "36px"]}
              fontWeight={"700"}
              color={"#333c43"}
              textAlign={"left"}
            >
              Check out our self-guided demo
            </Container>
            <Container
              marginBottom={"16px"}
              marginTop={"15px"}
              fontSize={["17px", "18px", "18px", "18px"]}
              color={"#475054"}
              textAlign={"left"}
            >
              If you want the full scope of what you’re getting once you sign
              up, visit our demo account. You can try out all the features
              DeskTime has to offer.
            </Container>
            <Flex>
              <Button
                fontSize={["15px", "16px", "16px", "18px"]}
                border="0.8PX SOLID GREY"
                borderRadius={5}
                bg={"#4ea819"}
                color={"#fff"}
                marginLeft={"10px"}
                padding={["12px 18px", "14px 20px", "14px 20px", "16px 22px"]}
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
