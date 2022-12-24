import { Box, Button, Flex, Input,  Text } from "@chakra-ui/react";
import {AiOutlineMenu} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import { useState } from "react";
import { useSelector } from "react-redux";
import { colors } from "../Colors";
function Navbar({onOpen}){
   const [value,setValue] = useState('')
   const {data} = useSelector((store)=>store.auth)
   const click1 = ()=>{
     let size = window.innerWidth
     if(size <= 1000){
      onOpen();
     }
     }

    return <Box w='100%' bg='#006600' p='10px 20px' position='sticky' top='0' zIndex='10'>
         <Flex w='100%' justifyContent='space-between' gap='10px' alignItems='center'>
         <AiOutlineMenu color='white' onClick={click1} fontSize='34px' />
         <Flex w={['240px','300px','400px','400px']}>
         <Input value={value} onChange={(e)=>setValue(e.target.value)} bg='white' borderRadius= '5px 0px 0px 5px' type='text' />
          <Button bg='white' _hover={{bg:'white'}} borderRadius= '0px 5px 5px 0px'>
          <BsSearch color="#006600" fontSize='24px'/>
         </Button>
         </Flex>
         <Flex display={['none','flex','flex','flex']} alignItems='center' gap='20px'>
            <Box color='white'>
            <Text>{data.username}</Text>
             <Text mt='-5px'>{data.email}</Text>
            </Box>
            <Flex fontSize='20px' borderRadius='50%' w='50px' h='50px' alignItems='center' bg={colors[data.username[0].toLowerCase()]} color='white' justifyContent='center'>
                <Text>{data.username[0].toUpperCase()}</Text>
            </Flex>
         </Flex>
      </Flex>

    </Box>
}


export default Navbar;