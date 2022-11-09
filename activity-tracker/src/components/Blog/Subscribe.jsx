import {Box,Heading,Text,Button,Input,Flex} from '@chakra-ui/react'

function  Subscribe(){
    return<Box textAlign='center' w='100%' m='auto' h={['310px','310px','240px']} bg='#4ea819'color='#fff' pt='20px'  mb='70px' mt='70px'>
        <Heading fontSize={['20px','20px','30px' ]} mb='20px' mt='20px'>
        Subscribe to our newsletter to get the latest updates
        </Heading>
    <Box>
    <Flex w={['80%','80%','40%']} m='auto' alignItems='center' flexDirection={['column','column','row']}  justifyContent='center' gap='15px' mb='20px'>
      <Input border='1px solid white'
      placeholder="Your email"
      p='0.6875rem 1.875rem'
      borderRadius='3px'
      bg='#fff'
      />
      <Button bg='#4ea819' 
      fontSize='14px'
      fontWeight='400' lineHeight='1'
      textTransform='uppercase' 
      color='white'
      border='1px solid white'
      p='0.6875rem 1.875rem'
      _hover={{bg:'none'}}
      borderRadius='3px'>Submit</Button>
    </Flex>
    </Box>

        <Text p='10px' fontSize={['15px','18px','auto']}>
        By subscribing you agree to our privacy policy
        </Text>
   </Box>

}

export default Subscribe;