import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {TiTick} from "react-icons/ti";
import Subscribe from '../components/Blog/Subscribe'
import {  HStack,
  Container,
  Image,
  Box,
  Text,
  Input,
  Button,
  Link,
  ChakraProvider,
  Flex,
  SimpleGrid,
  Heading,} from "@chakra-ui/react";
import { useState } from "react";
export const Faq = () => {
const [value,setValue] = useState('')
  useEffect(()=>{
    document.title = 'FAQ | Activity Tracker';
  })

  return (
    <> 
      <ChakraProvider>
        <Navbar />
        <Box pt='200px' w='100%' m='auto'>
      <Box w={['100%','100%','100%','40%']} m='auto' textAlign='center'>
    <Heading fontSize={['17px','22px','35px']} lineHeight='2rem' mb='20px' color='#333c43' >
    Frequently Asked Questions
    </Heading>
    <Text mb='20px' color='#333c43'>
    Here you can find all the questions you need answered
    </Text>
    <Flex m='auto' alignItems='center' flexDirection={['column','column','row','row']} justifyContent='center' gap='15px' mb='50px'>
      <Box>
      <Input border='1px solid #ced4da'
      placeholder="What are you looking for ?"
      p='0.8875rem 1.875rem'
      value={value}
      onChange={(e)=>setValue(e.target.value)}
      borderRadius='3px'/>
      </Box>
      <Box>
      <Button bg='#4ea819' 
      fontSize='17px'
      fontWeight='400' lineHeight='1'
      textTransform='uppercase' 
      color='#fff'
      border='1px solid gray'
      p='0.8875rem 1.875rem'
      borderRadius='3px'
      _hover={{bg:'#4ea819'}}
      >Search</Button>
      </Box>
    </Flex>
    </Box>
        <SimpleGrid w={['90%','90%','90%','80%']} m='auto' columns={['1','1','1','2']} spacing='30px'>
          <Box border="1px solid #DEE2E6" p='0px 14px' height="250px"  textAlign="start" >
            <Heading fontSize='22px' mb='20px' mt='20px' color='#333c43'>
              Getting started
              </Heading>
            <Text color="#333C43" fontWeight="700" mb='13px'>✅ <Link>How to set up my account (sign up,download,launch)?</Link></Text>
            <Text color="#333C43"  fontWeight="700" mb='13px'  >✅ <Link>How does the Mobile app work?</Link></Text>
            <Text color="#333C43" fontWeight="700" mb='13px'  >✅ <Link>What systems does DeskTime support?</Link></Text>
            <Button w='100%' _hover={{bg:'#4EA819'}} m='auto' fontSize="14px" bg="#4EA819" color="white" fontWeight="600" height="40PX" borderRadius="5px" border="1px solid #43762B" >VIEW ALL (24)</Button>
          </Box>
          <Box  border="1px solid #DEE2E6" p='0px 14px' height="250px"  textAlign="start" >
            <Heading fontSize='22px' mb='20px' mt='20px' color='#333c43'>
            General
              </Heading>
            <Text color="#333C43" fontWeight="700" mb='13px'>✅ <Link>How does the application work?</Link></Text>
            <Text color="#333C43"  fontWeight="700" mb='13px'  >✅ <Link>What is MyDeskTime page and what can i find there?</Link></Text>
            <Text color="#333C43" fontWeight="700" mb='13px'  >✅ <Link>What is Private Time?</Link></Text>
            <Button w='100%' _hover={{bg:'#4EA819'}} m='auto' fontSize="14px" bg="#4EA819" fontWeight="600" color="white" height="40PX" borderRadius="5px" border="1px solid #43762B" >VIEW ALL (24)</Button>
          </Box>
          <Box  border="1px solid #DEE2E6" p='0px 14px' height="250px"  textAlign="start" >
            <Heading fontSize='22px' mb='20px' mt='20px' color='#333c43'>
            Settings and Accounts
              </Heading>
            <Text color="#333C43" fontWeight="700" mb='13px'>✅ <Link>How to set up my account (sign up,download,launch)?</Link></Text>
            <Text color="#333C43"  fontWeight="700" mb='13px'  >✅ <Link>What is MyDeskTime page and what can i find there?</Link></Text>
            <Text color="#333C43" fontWeight="700" mb='13px'  >✅ <Link>What systems does DeskTime support?</Link></Text>
            <Button w='100%' _hover={{bg:'#4EA819'}} m='auto' fontSize="14px" bg="#4EA819" color="white" fontWeight="600" height="40PX" borderRadius="5px" border="1px solid #43762B" >VIEW ALL (24)</Button>
          </Box>
          <Box  border="1px solid #DEE2E6" p='0px 14px' height="250px"  textAlign="start" >
            <Heading fontSize='22px' mb='20px' mt='20px' color='#333c43'>
            Shifts Scheduling
              </Heading>
            <Text color="#333C43" fontWeight="700" mb='13px'>✅ <Link>How to set up my account (sign up,download,launch)?</Link></Text>
            <Text color="#333C43"  fontWeight="700" mb='13px'  >✅ <Link>What is MyDeskTime page and what can i find there?</Link></Text>
            <Text color="#333C43" fontWeight="700" mb='13px'  >✅ <Link>What systems does DeskTime support?</Link></Text>
            <Button w='100%' _hover={{bg:'#4EA819'}} m='auto' fontSize="14px" bg="#4EA819" fontWeight="600" color="white" height="40PX" borderRadius="5px" border="1px solid #43762B" >VIEW ALL (24)</Button>
          </Box>
          <Box  border="1px solid #DEE2E6" p='0px 14px' height="250px"  textAlign="start" >
            <Heading fontSize='22px' mb='20px' mt='20px' color='#333c43'>
            Booking
              </Heading>
            <Text color="#333C43" fontWeight="700" mb='13px'>✅ <Link>How to set up my account (sign up,download,launch)?</Link></Text>
            <Text color="#333C43"  fontWeight="700" mb='13px'  >✅ <Link>What is MyDeskTime page and what can i find there?</Link></Text>
            <Text color="#333C43" fontWeight="700" mb='13px'  >✅ <Link>What systems does DeskTime support?</Link></Text>
            <Button w='100%' _hover={{bg:'#4EA819'}} m='auto' fontSize="14px" bg="#4EA819" color="white" fontWeight="600" height="40PX" borderRadius="5px" border="1px solid #43762B" >VIEW ALL (24)</Button>
          </Box>
          <Box  border="1px solid #DEE2E6" p='0px 14px' height="250px"  textAlign="start" >
            <Heading fontSize='22px' mb='20px' mt='20px' color='#333c43'>
            Projects
              </Heading>
            <Text color="#333C43" fontWeight="700" mb='13px'>✅ <Link>How to set up my account (sign up,download,launch)?</Link></Text>
            <Text color="#333C43"  fontWeight="700" mb='13px'  >✅ <Link>What is MyDeskTime page and what can i find there?</Link></Text>
            <Text color="#333C43" fontWeight="700" mb='13px'  >✅ <Link>What systems does DeskTime support?</Link></Text>
            <Button w='100%' _hover={{bg:'#4EA819'}} m='auto' fontSize="14px" bg="#4EA819" fontWeight="600" color="white" height="40PX" borderRadius="5px" border="1px solid #43762B" >VIEW ALL (24)</Button>
          </Box>
          <Box  border="1px solid #DEE2E6" p='0px 14px' height="250px"  textAlign="start" >
            <Heading fontSize='22px' mb='20px' mt='20px' color='#333c43' >
            Offline Times
              </Heading>
            <Text color="#333C43" fontWeight="700" mb='13px'>✅ <Link>How to set up my account (sign up,download,launch)?</Link></Text>
            <Text color="#333C43"  fontWeight="700" mb='13px'  >✅ <Link>What is MyDeskTime page and what can i find there?</Link></Text>
            <Text color="#333C43" fontWeight="700" mb='13px'  >✅ <Link>What systems does DeskTime support?</Link></Text>
            <Button w='100%' _hover={{bg:'#4EA819'}} m='auto' fontSize="14px" bg="#4EA819" color="white" fontWeight="600" height="40PX" borderRadius="5px" border="1px solid #43762B" >VIEW ALL (24)</Button>
          </Box>
          <Box  border="1px solid #DEE2E6" p='0px 14px' height="250px"  textAlign="start" >
            <Heading fontSize='22px' mb='20px' mt='20px' color='#333c43'>
            Screenshots
              </Heading>
            <Text color="#333C43" fontWeight="700" mb='13px'>✅ <Link>How to set up my account (sign up,download,launch)?</Link></Text>
            <Text color="#333C43"  fontWeight="700" mb='13px'  >✅ <Link>What is MyDeskTime page and what can i find there?</Link></Text>
            <Text color="#333C43" fontWeight="700" mb='13px'  >✅ <Link>What systems does DeskTime support?</Link></Text>
            <Button w='100%' _hover={{bg:'#4EA819'}} m='auto' fontSize="14px" bg="#4EA819" fontWeight="600" color="white" height="40PX" borderRadius="5px" border="1px solid #43762B" >VIEW ALL (24)</Button>
          </Box>
          <Box  border="1px solid #DEE2E6" p='0px 14px' height="250px"  textAlign="start" >
            <Heading fontSize='22px' mb='20px' mt='20px' color='#333c43'>
            Reports
              </Heading>
            <Text color="#333C43" fontWeight="700" mb='13px'>✅ <Link>How to set up my account (sign up,download,launch)?</Link></Text>
            <Text color="#333C43"  fontWeight="700" mb='13px'  >✅ <Link>What is MyDeskTime page and what can i find there?</Link></Text>
            <Text color="#333C43" fontWeight="700" mb='13px'  >✅ <Link>What systems does DeskTime support?</Link></Text>
            <Button w='100%' _hover={{bg:'#4EA819'}} m='auto' fontSize="14px" bg="#4EA819" color="white" fontWeight="600" height="40PX" borderRadius="5px" border="1px solid #43762B" >VIEW ALL (24)</Button>
          </Box>
          <Box  border="1px solid #DEE2E6" p='0px 14px' height="250px"  textAlign="start" >
            <Heading fontSize='22px' mb='20px' mt='20px' color='#333c43'>
            Exports
              </Heading>
            <Text color="#333C43" fontWeight="700" mb='13px'>✅ <Link>How to set up my account (sign up,download,launch)?</Link></Text>
            <Text color="#333C43"  fontWeight="700" mb='13px'  >✅ <Link>What is MyDeskTime page and what can i find there?</Link></Text>
            <Text color="#333C43" fontWeight="700" mb='13px'  >✅ <Link>What systems does DeskTime support?</Link></Text>
            <Button w='100%' _hover={{bg:'#4EA819'}} m='auto' fontSize="14px" bg="#4EA819" fontWeight="600" color="white" height="40PX" borderRadius="5px" border="1px solid #43762B" >VIEW ALL (24)</Button>
          </Box>
          <Box  border="1px solid #DEE2E6" p='0px 14px' height="250px"  textAlign="start" >
            <Heading fontSize='22px' mb='20px' mt='20px' color='#333c43'>
            Integrations
              </Heading>
            <Text color="#333C43" fontWeight="700" mb='13px'>✅ <Link>How to set up my account (sign up,download,launch)?</Link></Text>
            <Text color="#333C43"  fontWeight="700" mb='13px'  >✅ <Link>What is MyDeskTime page and what can i find there?</Link></Text>
            <Text color="#333C43" fontWeight="700" mb='13px'  >✅ <Link>What systems does DeskTime support?</Link></Text>
            <Button w='100%' _hover={{bg:'#4EA819'}} m='auto' fontSize="14px" bg="#4EA819" color="white" fontWeight="600" height="40PX" borderRadius="5px" border="1px solid #43762B" >VIEW ALL (24)</Button>
          </Box>
          <Box  border="1px solid #DEE2E6" p='0px 14px' height="250px"  textAlign="start" >
            <Heading fontSize='22px' mb='20px' mt='20px' color='#333c43'>
            Billing
              </Heading>
            <Text color="#333C43" fontWeight="700" mb='13px'>✅ <Link>How to set up my account (sign up,download,launch)?</Link></Text>
            <Text color="#333C43"  fontWeight="700" mb='13px'  >✅ <Link>What is MyDeskTime page and what can i find there?</Link></Text>
            <Text color="#333C43" fontWeight="700" mb='13px'  >✅ <Link>What systems does DeskTime support?</Link></Text>
            <Button w='100%' _hover={{bg:'#4EA819'}} m='auto' fontSize="14px" bg="#4EA819" fontWeight="600" color="white" height="40PX" borderRadius="5px" border="1px solid #43762B" >VIEW ALL (24)</Button>
          </Box>
         </SimpleGrid>
        </Box>
        <Box>
 <Subscribe />
 </Box>
        <Footer />
      </ChakraProvider> 
      
    </>
  );
};
