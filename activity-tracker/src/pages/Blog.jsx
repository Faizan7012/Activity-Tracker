import { useState } from "react";
import { useEffect } from "react";
// import Skeleton from '@mui/material/Skeleton';
import {Box,SimpleGrid,Heading,Text,Input,Button,Flex,Center} from '@chakra-ui/react';
import axios from 'axios';
import { useSelector,useDispatch } from "react-redux";
import { getBlogsuccess,getBlogerror,getBlogloading } from "../redux/blog/action";
import BlogDiv from "../components/Blog/BlogDiv";
import SingleBlogDiv from "../components/Blog/singleBlogDiv";
import {ChakraProvider} from '@chakra-ui/react';
// import PAgination from "../components/Blog/pagination";
import Subscribe from "../components/Blog/Subscribe";
const filter = ['All Categories','Management','Work/Life','Trends','DeskTime','Workspace']
function Blog(){
const dispatch = useDispatch();
const {blogs,loading,error} = useSelector((store)=>store.blogs);
const [filterBy,setFilterBy] = useState('All Categories')
const [page,setPage] = useState(1);
const [totalPage,setTotalPage] = useState(0);

useEffect(()=>{
    dispatch(getBlogloading())
    if(filterBy == 'All Categories'){
        axios.get(`https://mock-api-heroku.herokuapp.com/blog?_page=${page}&_limit=6`)
        .then((res)=>{
         setTotalPage(res.headers["x-total-count"])
        dispatch(getBlogsuccess(res.data))
            })
            .catch((err)=>{
              dispatch(getBlogerror())
            })
    }
    else{
        axios.get(`https://mock-api-heroku.herokuapp.com/blog?category=${filterBy}&_page=${page}&_limit=6`)
        .then((res)=>{
         setTotalPage(res.headers["x-total-count"])
          dispatch(getBlogsuccess(res.data))
            })
            .catch((err)=>{
              dispatch(getBlogerror())
            })
    }
   

    },[page,filterBy])
    const handlePage = (val)=>{
      setPage(Number(val))
  }

const handleCount = (val)=>{

  setPage(page+val)
}
return <ChakraProvider><Box w={['90%','90%','90%','80%']} m='auto' mt='50px' fontSize='1.25rem' lineHeight='1.5'>

  <Box mb='90px'>
    <Box w={['100%','100%','100%','40%']} m='auto' textAlign='center'>
    <Heading fontSize={['17px','22px','auto']} mb='20px'>
    Activity Tracker blog
    </Heading>
    <Text mb='20px'>
    You can read our Case studies and latest news in the productivity industry
    </Text>

    <Flex m='auto' alignItems='center' flexDirection={['column','column','row','row']} justifyContent='center' gap='15px' mb='50px'>
      <Box>
      <Input border='1px solid gray'
      placeholder="Search blog"
      p='0.8875rem 1.875rem'
      borderRadius='3px'/>
      </Box>
      <Box>
      <Button onClick={()=>{
        setFilterBy()
      }} bg='#4ea819' 
      fontSize='17px'
      fontWeight='400' lineHeight='1'
      textTransform='uppercase' 
      color='#fff'
      border='1px solid gray'
      p='0.8875rem 1.875rem'
      borderRadius='3px'
      >Search</Button>
      </Box>
    </Flex>
    </Box>
 
    <SimpleGrid w='80%' m='auto' columns={['2','2','3','6']} spacing='10px' mt='30px' justifyContent='center'>
       {

        filter.map((ele)=>{
          return <Text key={ele} _hover={{color:'#4ea819'}} onClick={()=>setFilterBy(ele)}>{ele}</Text>
        })
       }
   </SimpleGrid>
  </Box>
  
  {
   blogs.length!==0?<SingleBlogDiv data={blogs[5]} />:null
  }

{
  loading?<Box>
    {/* <Flex w='80%' m='auto' justifyContent='center' gap='20px'>
   <Box>
  <Skeleton variant="rectangular" width={350} height={118} />
  <Skeleton />
  <Skeleton />

   </Box>
   <Box>
   <Skeleton variant="rectangular" width={350} height={118} />
   <Skeleton />
  <Skeleton />
   </Box>
   <Box>
   <Skeleton variant="rectangular" width={350} height={118} />
   <Skeleton />
  <Skeleton />
   </Box>
    </Flex> */}
 

</Box>:error?<h1>error...</h1>:
  <Box>
   <SimpleGrid columns={['1','1','2','3']} spacing='20px' rowGap='40px'>
  {
  
  
  blogs?.map((ele,index)=>{
  return index<=2?<BlogDiv data={ele} />:''
  })
  
  }
  </SimpleGrid>
  
  <Box>
   <Subscribe />
   </Box>
   <SimpleGrid columns={['1','1','2','3']} spacing='20px' rowGap='40px'>
  {
  
  
  blogs?.map((ele,index)=>{
  return index>=3?<BlogDiv data={ele} />:''
  })
  
  }
  </SimpleGrid>
  </Box>
 

}
  
  <Box textAlign={['center','center','left']} p={['0px','0px','20px 70px']} w='90%' m='auto' mb='70px' h='250px' backgroundImage='url(https://desktime.com/blog/wp-content/uploads/2022/01/guest-blog-1024x206-1.jpg)' mt='70px'>
   <Heading mb='20px' fontSize={['20px','25px','30px']}>
   Guest blogger?
   </Heading>
   <Text w={['100%','100%','100%','40%']} mb='20px'>
   If you’re an experienced writer and want to write for us,
    we’ll be happy to hear from you.
   </Text>
   <Button m='auto' color='#fff' border='1px solid gray' bg='#4ea819' fontSize='17px'fontWeight='400' p='10px 20px' borderRadius='3px'>
    Discover guest blogging opportunities
   </Button>
  </Box>
  <Center>
<Box>
{/* <PAgination totalPage={totalPage} handlePage={handlePage} handleCount={handleCount} page={page}  /> */}
</Box>
</Center>


</Box>
</ChakraProvider>

}

export default Blog;