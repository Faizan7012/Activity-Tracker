import {Box,Image,Heading,Flex,Text} from '@chakra-ui/react';
import AuthorDiv from './AuthorDiv';

function SingleBlogDiv({data}){
const {img,authImg,title,author,desc,date} = data;

return<Flex w={['100%','100%','90%','80%']} m='auto' borderRadius='10px' fontFamily= '"Source Sans Pro",sans-serif' flexDirection={['column','column','column','row']} alignItems='center' gap='30px' mb='50px'>
<Box w={['90%','90%','90%','70%']}>
    <Image w='100%' h={['190px','250xp','350px']} src={img} />
</Box>
<Box w={['90%','90%','90%','30%']}>
<Box>
    <Heading fontSize='20px' mt='10px' lineHeight='1.6rem' ml='10px' mb='30px' textAlign='left'>
        {title}
    </Heading>
</Box>
<Box>
    <Text fontSize='15px' lineHeight='20px' textAlign='left' ml='10px'>
        {desc}
    </Text>
</Box>
<Box textAlign='left' fontSize='10px' ml='10px' mt='10px'>
    <Heading color='#00d084' fontSize='14px' mt='20px'>
    Continue Reading
    </Heading>
</Box>
<Box mt='70px' p='10px' ml='6px'>
    <Flex alignItems='center' justifyContent='space-between' >

      <AuthorDiv logo={authImg} author={author}/>

        <Heading fontSize='10px'>
          {date}
        </Heading>
    </Flex>
</Box>
</Box>
 </Flex> 

}

export default SingleBlogDiv;