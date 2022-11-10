import { Box,Heading,Text,Button } from "@chakra-ui/react"
export default function FooterBlogger(){
    return <Box textAlign={['center','center','left']} p={['0px','0px','20px 70px']} w='90%' m='auto' mb='70px' h='250px' backgroundImage='url(https://desktime.com/blog/wp-content/uploads/2022/01/guest-blog-1024x206-1.jpg)' mt='70px'>
     <Heading mb='20px' fontSize={['20px','25px','30px']} mt='20px'>
     Guest blogger?
     </Heading>
     <Text w={['100%','100%','100%','40%']} mb='20px'>
     If you’re an experienced writer and want to write for us,
      we’ll be happy to hear from you.
     </Text>
     <Button  color='#fff' variant='outline' _hover={{bg:'#4ea819'}} bg='#4ea819' fontSize='17px' fontWeight='400' p='10px 20px' borderRadius='3px'>
      Discover guest blogging opportunities
     </Button>
    </Box>
}