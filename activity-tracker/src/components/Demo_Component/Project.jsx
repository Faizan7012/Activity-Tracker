import {
  Button,
  ChakraProvider,
  Flex,
  Grid,
  GridItem,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { BiEdit } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";

function Project(props) {
  return (
    <ChakraProvider>
      <VStack mb='50px'>
        <Flex w="90%" px="12px" justifyContent={"space-between"}>
          <Text color="#333c43" fontSize={"26px"}>
            Projects
          </Text>
          <Button
            //
            // onClick={HandleProject}
            cursor={"pointer"}
            borderRadius={"6px"}
            // border="0.1px solid black"
            fontWeight={"600"}
            padding="10px 18px"
            fontSize="12px"
            color={"#fff"}
            background={"#4ea819"}
            _hover={{
              background: "#4ea819",
            }}
          >
            NEW PROJECT
          </Button>
        </Flex>
        <Grid w="90%" gap="20px" templateColumns="repeat(3, 1fr)">
          <GridItem
          //   border="1px solid green"
          >
            <Flex
              margin={"15px"}
              paddingLeft="8px"
              justifyContent={"flex-start"}
              flexDirection={"column"}
              borderLeft="3px solid #d6d8d9"
            >
              <Text
                textAlign={"left"}
                fontWeight="500"
                color="#475056"
                fontSize={"12px"}
              >
                TOTAL AMOUNT OF PROJECTS
              </Text>
              <Text
                fontWeight="500"
                textAlign={"left"}
                fontSize={"26px"}
                color={"#4ea819"}
              >
                2
              </Text>
            </Flex>
          </GridItem>
          <GridItem
          //   border="1px solid green"
          >
            <Flex
              margin={"15px"}
              paddingLeft="8px"
              justifyContent={"flex-start"}
              flexDirection={"column"}
              borderLeft="3px solid #d6d8d9"
            >
              <Text
                textAlign={"left"}
                fontWeight="500"
                color="#475056"
                fontSize={"12px"}
              >
                TOTAL AMOUNT OF PROJECTS
              </Text>
              <Text
                fontWeight="500"
                textAlign={"left"}
                fontSize={"26px"}
                color={"#4ea819"}
              >
                2
              </Text>
            </Flex>
          </GridItem>
          <GridItem
          //   border="1px solid green"
          >
            <Flex
              margin={"15px"}
              paddingLeft="8px"
              justifyContent={"flex-start"}
              flexDirection={"column"}
              borderLeft="3px solid #d6d8d9"
            >
              <Text
                textAlign={"left"}
                fontWeight="500"
                color="#475056"
                fontSize={"12px"}
              >
                TOTAL AMOUNT OF PROJECTS
              </Text>
              <Text
                fontWeight="500"
                textAlign={"left"}
                fontSize={"26px"}
                color={"#4ea819"}
              >
                2
              </Text>
            </Flex>
          </GridItem>
        </Grid>
        <Flex
          w="86%"
          padding="0 10px 0 10px"
        >
          <Flex
            w="100%"
            padding="10 0 10 0"
            alignItems={"center"}
            justifyContent={"space-between"}

            // border="1px solid green"
          >
            <Flex>Project </Flex>
            <Flex>Date</Flex>
            <Flex>
              <Image
                w="70px"
                h="50px"
                mixBlendMode='multiply'
                src="https://i.ibb.co/H7DQjXv/a-t-logo-1.png"
              />
            </Flex>
            <Flex>Index + 1</Flex>
            <Flex
              height={"20px"}
              gap="25px"
              // border="1px solid brown"
            >
              <Flex>
                <BiEdit />
              </Flex>
              <Flex>
                <BsTrash />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </VStack>
    </ChakraProvider>
  );
}

export default Project;
