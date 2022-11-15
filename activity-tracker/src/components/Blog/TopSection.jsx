import {Box,SimpleGrid,Heading,Text,Input,Button,Flex,Skeleton} from '@chakra-ui/react';
import { useState } from 'react';
import {useSearchParams} from 'react-router-dom';
const filter = ['All Categories','Management','Work/Life','Trends','DeskTime','Workspace'];
export default function TopSec({handleFilter}){
const [searchParams, setSearchParam] = useSearchParams();
  const value3 = searchParams.get("filterBy")
    const [value,setValue] = useState('')
    return <Box mb='90px'>
    <Box w={['100%','100%','100%','40%']} m='auto' textAlign='center'>
    <Heading fontSize={['17px','22px','auto']} mb='20px' >
    Activity Tracker blog
    </Heading>
    <Text mb='20px' p='10px'>
    You can read our Case studies and latest news in the productivity industry
    </Text>
    <Flex m='auto' alignItems='center' flexDirection={['column','column','row','row']} justifyContent='center' gap='15px' mb='50px'>
      <Box>
      <Input border='1px solid #ced4da'
      placeholder="Search blog"
      p='0.8875rem 1.875rem'
      value={value}
      onChange={(e)=>setValue(e.target.value)}
      borderRadius='3px'/>
      </Box>
      <Box>
      <Button onClick={()=>{
        const i = Math.floor(Math.random() * (5 - 0) + 0)
         handleFilter(filter[i])
        setValue('')
      }} bg='#4ea819' 
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
  
    <SimpleGrid w='80%' m='auto' columns={['2','2','3','6']} spacing='10px' mt='30px' justifyContent='center'>
       {
  
        filter.map((ele)=>{
          return <Text key={ele}
           _hover={{color:'#4ea819',_after:{w:'100%'}}}
           color={value3=='all'&&ele=='All Categories' || ele==value3?'#4ea819':'black'}
            onClick={()=>handleFilter(ele)}
            pb='10px'
           borderBottom={value3=='all'&&ele=='All Categories' || ele==value3?'2px solid #4EA819':'none'}
           transition='0.3'
            >
              {ele}
              </Text>
        })
       }
   </SimpleGrid>
  </Box>
}