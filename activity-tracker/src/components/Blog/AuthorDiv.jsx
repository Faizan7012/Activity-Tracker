import {Avatar,Heading,Flex,Box} from '@chakra-ui/react';


 function AuthorDiv({logo,author}){


    return <Box>
               <Flex justifyContent='space-between' alignItems='center'>
   
               <Avatar position='none' w='30px' borderRadius='50%' h='30px' src={logo} />
               <Heading fontSize='10px' ml='20px' >
                {author}
               </Heading>

               </Flex>
            </Box>
  

 }

 export default AuthorDiv;