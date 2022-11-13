import { Avatar, Box, Button, Container, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";
import { HiMenu } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
const InfoData = JSON.parse(localStorage.getItem('firebaseauth'))||'';
function Dashboard_Nav() {

  return (
    <Flex m='auto' flexDirection={"column"}>
      <Flex
        justify={"center"}
        
        alignItems="center"
        p="14px"
        bg="#4EA819"
      >
        <Flex
          alignItems="center"
          gap="20px"
          
        >
          <Text fontWeight={"450"} fontSize="15px" color={"#fff"}>
            Free trial active - 13 days left
          </Text>
          <Box
            px="18px"
            py="5px"
            as="a"
            fontSize={"10px"}
            fontWeight={"600"}
            borderRadius="5px"
            color={"#212529"}
            border="1px solid green"
            background={"#fff"}
          >
            SUBSCRIBE NOW
          </Box>
          <Box
            px="18px"
            py="5px"
            as="a"
            bg="none"
            fontSize={"10px"}
            fontWeight={"600"}
            borderRadius="5px"
            color={"#fff"}
            border="1.5px solid #fff"
          >
            BOOK A DEMO
          </Box>
        </Flex>
      </Flex>
      <Box  bg="#fff">
      <Flex
        justifyContent={"space-between"}
        alignItems="center"
        p="6px"
        w="90%"
        m="auto"
      >
        <Flex
          w="18%"
          // border="1px solid black"
          justifyContent={"space-between"}
          gap='20px'
        >
          <Flex
            justifyContent={"center"}
            // border="1px solid black"
            alignItems="center"
          >
            <HiMenu  fontWeight={"1000"} color="#475056" fontSize={"40px"} />{" "}
          </Flex>
          <Flex
            //   w="70%"
            // marginRight="5px"
            p="6px"
            justifyContent={"space-between"}
            alignItems="center"
            border="1px solid #475056"
          >
            <input className="no-outlineDN" placeholder="Search" />
            <AiOutlineSearch color="#475056" fontSize={"22px"} />
          </Flex>
        </Flex>
        <Flex
        gap='30px'
          px="8px"
          my="5px"
          justifyContent={"space-between"}
          alignItems="center"
        >
          <Flex>
            {" "}
            <MdNotifications color="#475056" fontSize={"23px"} />{" "}
          </Flex>
          <Flex
            justifyContent={"center"}
            // alignItems="center"
            flexDirection={"column"}
          >
            <Text
              fontSize={"14px"}
              textAlign="right"
              fontWeight={"600"}
              color={"#3B4248"}
            >
              {
                InfoData.displayName

              }
            </Text>
            <Text
              textAlign="right"
              fontSize={"14px"}
              fontWeight={"400"}
              color={"#212529"}
            >
            {

            }
            </Text>
          </Flex>
          <Flex>
             <Avatar src={InfoData.photoURL}  /> 
          </Flex>
        </Flex>
      </Flex>
      </Box>
      
    </Flex>
  );
}
export default Dashboard_Nav;