import {Box,Image,Heading,Flex,Text} from '@chakra-ui/react';
import AuthorDiv from './AuthorDiv';


function BlogDiv({data}){
 const {img,authImg,title,author,desc,date} = data;
 return  <Box  borderRadius='10px' fontFamily= '"Source Sans Pro",sans-serif' key={data.id}>
            <Box>
                <Image maxW='100%' h='auto' src={img} />
            </Box>
            <Box>
            <Box>
                <Heading fontSize='15px' mb='20px' mt='10px' lineHeight='1.6rem' ml='10px' textAlign='left'>
                    {title}
                </Heading>
            </Box>
            <Box>
                <Text fontSize='15px' lineHeight='20px' textAlign='left' ml='10px'>
                    {desc}
                </Text>
            </Box>
            <Box textAlign='left' fontSize='10px' ml='10px' mt='40px'>
                <Heading color='#00d084' fontSize='13px'>
                Continue Reading
                </Heading>
            </Box>
            <Box mt='70px' p='10px' ml='6px'>
                <Flex alignItems='center' justifyContent='space-between'>
     
                  <AuthorDiv logo={authImg} author={author}/>

                    <Heading fontSize='10px'>
                      {date}
                    </Heading>
                </Flex>
            </Box>
            </Box>
             </Box> 

}

export default BlogDiv;