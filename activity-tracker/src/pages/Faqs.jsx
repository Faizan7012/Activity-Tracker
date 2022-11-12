import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

function Faqs() {
  return (
    <>
      <Box>
        <Flex
          bg="#f5f5f6 !important"
          pt="20%"
          pb="10%"
          flexDirection={"column"}
          // border="1px solid red"
        >
          <Flex
            w="70%"
            m="auto"
            gap="40px"
            flexDirection={"column"}
            //   border="1px solid red"
            justify={"center"}
          >
            <Stack>
              <Text
                as="h1"
                fontWeight={"700"}
                fontSize={"30px"}
                color="#333c43"
              >
                Frequently Asked Questions
              </Text>
              <Text as="p" color="#475056" fontSize={"18px"}>
                Here you can find all the questions you need answered
              </Text>
            </Stack>
            <Flex w="70%" justifyContent={"space-between"} m="auto">
              <Box
                bg="#fff"
                borderRadius={"5px"}
                w="80%"
                border={"1px solid #333c43"}
              >
                <Input
                  _focus={{
                    outline: "none",
                  }}
                  className="faqInDN"
                  color={"#262c30"}
                  placeholder="What are you looking for ?"
                />
              </Box>
              <Button
                background={"#4ea819"}
                color="#fff"
                fontSize={"16px"}
                padding="13px 32px"
                border="1px solid black"
              >
                SEARCH
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Box>

      <Grid templateColumns="repeat(5, 1fr)">
        <GridItem></GridItem>
      </Grid>
    </>
  );
}

export default Faqs;
