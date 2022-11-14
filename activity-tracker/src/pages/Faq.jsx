import React, { useEffect } from "react";
import "./About.css"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {TiTick} from "react-icons/ti";
import {  HStack,
  Container,
  Image,
  Box,
  Text,
  Input,
  Button,
  Link,
  ChakraProvider,
  Flex,} from "@chakra-ui/react";
export const Faq = () => {

  useEffect(()=>{
    document.title = 'FAQ | Activity Tracker';
  })

  return (
    <> 
      {" "}
      <Container>
      <ChakraProvider>
       
        <Navbar />
      </ChakraProvider> 
      <HStack
          width="100%"
           bg="#F5F5F6"
          paddingTop={"100px"}
          paddingBottom={"70px"}
          backgroundSize={"cover"}
          backgroundRepeat="no-repeat"
        >
          <Box>
            <Text
              id="sen2"
              color="#333C43"
              fontSize={40}
              fontWeight="bold"
              marginLeft="500px"
              marginTop="50px"
            >
             Frequently Asked Questions
            </Text>
            <Text
              id="sen1"
              color="#475056"
              marginBottom="20px"
              paddingLeft="20px"
              fontSize="18px"
              fontWeight="normal"
              marginTop="50px"
            >
              Here you can find all the questions you need answered
            </Text>
            <HStack marginLeft="500px">
              <div id="inputSec">
                <Input
                  type="Text"
                  bg="white"
                  size="lg"
                  w="lg"
                  placeholder="What are you looking for?"
                ></Input>
                <Button
                  backgroundColor="#4EA819"
                  fontWeight="bold"
                  color="white"
                >
                 SEARCH
                </Button>
              </div>
            </HStack>
            
          </Box>
        </HStack>
        

        <HStack  display="flex"  marginTop="60px">
          <Box  border="1px solid #DEE2E6" height="250px" id="faqone_box" width="554px" textAlign="start" paddingLeft="20px" >
            <Text id="l0">
              Getting started
              </Text>
            <Text color="#333C43" fontSize="18px" fontWeight="700" marginTop="13px" >✅ <Link textDecoration="underline">How to set up my account (sign up,download,launch)?</Link></Text>
            <Text color="#333C43"  fontWeight="700" marginTop="10px" >✅ <Link textDecoration="underline">How does the Mobile app work?</Link></Text>
            <Text color="#333C43" fontWeight="700" marginTop="10px" >✅ <Link textDecoration="underline">What systems does DeskTime support?</Link></Text>
            <Button id="faqbtn" marginTop="22px" width="512px" fontSize="14px" bg="#4EA819" color="white" fontWeight="600" height="40PX" borderRadius="5px" border="1px solid #43762B" >VIEW ALL (24)</Button>
          </Box>
          <Box  border="1px solid #DEE2E6" height="250px" id="faqtwo_box" width="554px" textAlign="start" paddingLeft="20px" >
            <Text id="l0">
            General
              </Text>
            <Text color="#333C43" fontSize="18px" fontWeight="700" marginTop="13px" >✅ <Link textDecoration="underline">How does the application work?</Link></Text>
            <Text color="#333C43"  fontWeight="700" marginTop="10px" >✅ <Link textDecoration="underline">What is MyDeskTime page and what can i find there?</Link></Text>
            <Text color="#333C43" fontWeight="700" marginTop="10px" >✅ <Link textDecoration="underline">What is Private Time?</Link></Text>
            <Button id="faqbtn" marginTop="22px" width="512px" fontSize="14px" bg="#4EA819" fontWeight="600" color="white" height="40PX" borderRadius="5px" border="1px solid #43762B" >VIEW ALL (24)</Button>
          </Box>
        </HStack>


        <HStack  display="flex"  marginTop="60px">
          <Box  border="1px solid #DEE2E6" height="250px" id="faqone_box" width="554px" textAlign="start" paddingLeft="20px" >
            <Text id="l0">
            Settings and Accounts
              </Text>
            <Text color="#333C43" fontSize="18px" fontWeight="700" marginTop="13px" >✅ <Link textDecoration="underline">How to set up my account (sign up,download,launch)?</Link></Text>
            <Text color="#333C43"  fontWeight="700" marginTop="10px" >✅ <Link textDecoration="underline">What is MyDeskTime page and what can i find there?</Link></Text>
            <Text color="#333C43" fontWeight="700" marginTop="10px" >✅ <Link textDecoration="underline">What systems does DeskTime support?</Link></Text>
            <Button id="faqbtn" marginTop="22px" width="512px" fontSize="14px" bg="#4EA819" color="white" fontWeight="600" height="40PX" borderRadius="5px" border="1px solid #43762B" >VIEW ALL (24)</Button>
          </Box>
          <Box  border="1px solid #DEE2E6" height="250px" id="faqtwo_box" width="554px" textAlign="start" paddingLeft="20px" >
            <Text id="l0">
            Shifts Scheduling
              </Text>
            <Text color="#333C43" fontSize="18px" fontWeight="700" marginTop="13px" >✅ <Link textDecoration="underline">How to set up my account (sign up,download,launch)?</Link></Text>
            <Text color="#333C43"  fontWeight="700" marginTop="10px" >✅ <Link textDecoration="underline">What is MyDeskTime page and what can i find there?</Link></Text>
            <Text color="#333C43" fontWeight="700" marginTop="10px" >✅ <Link textDecoration="underline">What systems does DeskTime support?</Link></Text>
            <Button id="faqbtn" marginTop="22px" width="512px" fontSize="14px" bg="#4EA819" fontWeight="600" color="white" height="40PX" borderRadius="5px" border="1px solid #43762B" >VIEW ALL (24)</Button>
          </Box>
        </HStack>


        <HStack  display="flex"  marginTop="60px">
          <Box  border="1px solid #DEE2E6" height="250px" id="faqone_box" width="554px" textAlign="start" paddingLeft="20px" >
            <Text id="l0">
            Booking
              </Text>
            <Text color="#333C43" fontSize="18px" fontWeight="700" marginTop="13px" >✅ <Link textDecoration="underline">How to set up my account (sign up,download,launch)?</Link></Text>
            <Text color="#333C43"  fontWeight="700" marginTop="10px" >✅ <Link textDecoration="underline">What is MyDeskTime page and what can i find there?</Link></Text>
            <Text color="#333C43" fontWeight="700" marginTop="10px" >✅ <Link textDecoration="underline">What systems does DeskTime support?</Link></Text>
            <Button id="faqbtn" marginTop="22px" width="512px" fontSize="14px" bg="#4EA819" color="white" fontWeight="600" height="40PX" borderRadius="5px" border="1px solid #43762B" >VIEW ALL (24)</Button>
          </Box>
          <Box  border="1px solid #DEE2E6" height="250px" id="faqtwo_box" width="554px" textAlign="start" paddingLeft="20px" >
            <Text id="l0">
            Projects
              </Text>
            <Text color="#333C43" fontSize="18px" fontWeight="700" marginTop="13px" >✅ <Link textDecoration="underline">How to set up my account (sign up,download,launch)?</Link></Text>
            <Text color="#333C43"  fontWeight="700" marginTop="10px" >✅ <Link textDecoration="underline">What is MyDeskTime page and what can i find there?</Link></Text>
            <Text color="#333C43" fontWeight="700" marginTop="10px" >✅ <Link textDecoration="underline">What systems does DeskTime support?</Link></Text>
            <Button id="faqbtn" marginTop="22px" width="512px" fontSize="14px" bg="#4EA819" fontWeight="600" color="white" height="40PX" borderRadius="5px" border="1px solid #43762B" >VIEW ALL (24)</Button>
          </Box>
        </HStack>


        <HStack  display="flex"  marginTop="60px">
          <Box  border="1px solid #DEE2E6" height="250px" id="faqone_box" width="554px" textAlign="start" paddingLeft="20px" >
            <Text id="l0">
            Offline Times
              </Text>
            <Text color="#333C43" fontSize="18px" fontWeight="700" marginTop="13px" >✅ <Link textDecoration="underline">How to set up my account (sign up,download,launch)?</Link></Text>
            <Text color="#333C43"  fontWeight="700" marginTop="10px" >✅ <Link textDecoration="underline">What is MyDeskTime page and what can i find there?</Link></Text>
            <Text color="#333C43" fontWeight="700" marginTop="10px" >✅ <Link textDecoration="underline">What systems does DeskTime support?</Link></Text>
            <Button id="faqbtn" marginTop="22px" width="512px" fontSize="14px" bg="#4EA819" color="white" fontWeight="600" height="40PX" borderRadius="5px" border="1px solid #43762B" >VIEW ALL (24)</Button>
          </Box>
          <Box  border="1px solid #DEE2E6" height="250px" id="faqtwo_box" width="554px" textAlign="start" paddingLeft="20px" >
            <Text id="l0">
            Screenshots
              </Text>
            <Text color="#333C43" fontSize="18px" fontWeight="700" marginTop="13px" >✅ <Link textDecoration="underline">How to set up my account (sign up,download,launch)?</Link></Text>
            <Text color="#333C43"  fontWeight="700" marginTop="10px" >✅ <Link textDecoration="underline">What is MyDeskTime page and what can i find there?</Link></Text>
            <Text color="#333C43" fontWeight="700" marginTop="10px" >✅ <Link textDecoration="underline">What systems does DeskTime support?</Link></Text>
            <Button id="faqbtn" marginTop="22px" width="512px" fontSize="14px" bg="#4EA819" fontWeight="600" color="white" height="40PX" borderRadius="5px" border="1px solid #43762B" >VIEW ALL (24)</Button>
          </Box>
        </HStack>

        <HStack  display="flex"  marginTop="60px">
          <Box  border="1px solid #DEE2E6" height="250px" id="faqone_box" width="554px" textAlign="start" paddingLeft="20px" >
            <Text id="l0">
            Reports
              </Text>
            <Text color="#333C43" fontSize="18px" fontWeight="700" marginTop="13px" >✅ <Link textDecoration="underline">How to set up my account (sign up,download,launch)?</Link></Text>
            <Text color="#333C43"  fontWeight="700" marginTop="10px" >✅ <Link textDecoration="underline">What is MyDeskTime page and what can i find there?</Link></Text>
            <Text color="#333C43" fontWeight="700" marginTop="10px" >✅ <Link textDecoration="underline">What systems does DeskTime support?</Link></Text>
            <Button id="faqbtn" marginTop="22px" width="512px" fontSize="14px" bg="#4EA819" color="white" fontWeight="600" height="40PX" borderRadius="5px" border="1px solid #43762B" >VIEW ALL (24)</Button>
          </Box>
          <Box  border="1px solid #DEE2E6" height="250px" id="faqtwo_box" width="554px" textAlign="start" paddingLeft="20px" >
            <Text id="l0">
            Exports
              </Text>
            <Text color="#333C43" fontSize="18px" fontWeight="700" marginTop="13px" >✅ <Link textDecoration="underline">How to set up my account (sign up,download,launch)?</Link></Text>
            <Text color="#333C43"  fontWeight="700" marginTop="10px" >✅ <Link textDecoration="underline">What is MyDeskTime page and what can i find there?</Link></Text>
            <Text color="#333C43" fontWeight="700" marginTop="10px" >✅ <Link textDecoration="underline">What systems does DeskTime support?</Link></Text>
            <Button id="faqbtn" marginTop="22px" width="512px" fontSize="14px" bg="#4EA819" fontWeight="600" color="white" height="40PX" borderRadius="5px" border="1px solid #43762B" >VIEW ALL (24)</Button>
          </Box>
        </HStack>

        <HStack  display="flex"  marginTop="60px">
          <Box  border="1px solid #DEE2E6" height="250px" id="faqone_box" width="554px" textAlign="start" paddingLeft="20px" >
            <Text id="l0">
            Integrations
              </Text>
            <Text color="#333C43" fontSize="18px" fontWeight="700" marginTop="13px" >✅ <Link textDecoration="underline">How to set up my account (sign up,download,launch)?</Link></Text>
            <Text color="#333C43"  fontWeight="700" marginTop="10px" >✅ <Link textDecoration="underline">What is MyDeskTime page and what can i find there?</Link></Text>
            <Text color="#333C43" fontWeight="700" marginTop="10px" >✅ <Link textDecoration="underline">What systems does DeskTime support?</Link></Text>
            <Button id="faqbtn" marginTop="22px" width="512px" fontSize="14px" bg="#4EA819" color="white" fontWeight="600" height="40PX" borderRadius="5px" border="1px solid #43762B" >VIEW ALL (24)</Button>
          </Box>
          <Box  border="1px solid #DEE2E6" height="250px" id="faqtwo_box" width="554px" textAlign="start" paddingLeft="20px" >
            <Text id="l0">
            Billing
              </Text>
            <Text color="#333C43" fontSize="18px" fontWeight="700" marginTop="13px" >✅ <Link textDecoration="underline">How to set up my account (sign up,download,launch)?</Link></Text>
            <Text color="#333C43"  fontWeight="700" marginTop="10px" >✅ <Link textDecoration="underline">What is MyDeskTime page and what can i find there?</Link></Text>
            <Text color="#333C43" fontWeight="700" marginTop="10px" >✅ <Link textDecoration="underline">What systems does DeskTime support?</Link></Text>
            <Button id="faqbtn" marginTop="22px" width="512px" fontSize="14px" bg="#4EA819" fontWeight="600" color="white" height="40PX" borderRadius="5px" border="1px solid #43762B" >VIEW ALL (24)</Button>
          </Box>
        </HStack>


        <HStack
          backgroundColor="#4EA819"
          h="360px"
          width="1440px"
          mt="80px"
          borderBottom="14px solid #4EA819"
          boxShadow=" rgba(0, 0, 0, 0.35) 0px 5px 15px;"
          centerContent
        >
          <Box>
            <Text
              id="sen7"
              color="white"
              marginLeft="170px"
              fontSize={40}
              fontWeight="bold"
              marginTop="20px"
            >
             Don't miss our blog, full of productivity resources with tips, 
              <br />
              trends, statistics, and more!
            </Text>

            <HStack marginLeft="500px">
              <div id="inputSec3">
               
                <Button
                  backgroundColor="#4EA819"
                  fontWeight="bold"
                  color="white"
           
                >
                  VIEW WEBINARS & VIDEOS
                </Button>
              </div>
            </HStack>
            
          </Box>
        </HStack>


       
      
      </Container>
      <ChakraProvider>
        <Footer />
      </ChakraProvider>
      
    </>
  );
};
