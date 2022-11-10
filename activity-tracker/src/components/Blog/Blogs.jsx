import {Box,SimpleGrid,Flex,Skeleton} from '@chakra-ui/react';
import Subscribe from './Subscribe';
import BlogDiv from './BlogDiv'
export default function Blogs({blogs,error,loading}){
return <Box>
{
loading?<Box>
  <Flex w={['100%','100%','100%','80%']} m='auto' gap='20px' justifyContent='center' flexDirection={['column','column','column','row']}>
  <Skeleton m='auto' width={['90%','90%','90%','100%']} height='200px' />
  <Skeleton m='auto' width={['90%','90%','90%','100%']} height='200px' />
  <Skeleton m='auto' width={['90%','90%','90%','100%']} height='200px' />
  </Flex>
</Box>:error?<h1>error...</h1>:
<Box w={['90%','90%','90%','80%']} m='auto'>
 <SimpleGrid columns={['1','1','1','3']} spacing='20px' rowGap='40px'>
{


blogs?.map((ele,index)=>{
return index<=2?<BlogDiv data={ele} />:''
})

}
</SimpleGrid>
<Box>
 <Subscribe />
 </Box>
 <SimpleGrid columns={['1','1','1','3']} spacing='20px' rowGap='40px'>
{


blogs?.map((ele,index)=>{
return index>=3?<BlogDiv data={ele} />:''
})

}
</SimpleGrid>
</Box>
}
</Box>

}