import {Box,Heading,Button, SimpleGrid} from '@chakra-ui/react'
import PlanSingleDiv from './planSingleDiv';
import  {Link} from 'react-router-dom'
let data = [
'Automatic time tracking',
'URL and app tracking',
'Integrated web timer',
'Mobile app'
]
function PriceSign(){

return <Box w={['100%','100%','90%','90%']} m='auto'  p='40px 10px' boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' borderRadius='10px' mt='70px' mb='70px'>
    <SimpleGrid columns={['1','1','2','3']} alignItems='center' spacing='30px'>
    <Box>
        <Heading fontSize='20px'>
        Activity Tracker Lite
        </Heading>
        <Heading fontSize='20px' mt='14px'>
        ₹0
        </Heading>
        <Heading fontSize='13px' mt='20px'>
        1 User only
        </Heading>
    </Box>
    <Box>
        {
            data.map((ele)=>{
                return <PlanSingleDiv s='8%' ele={ele} />
            })
        }
    </Box>
      

    <Box>
      <Link to='/signup'>
      <Button
      bg='#4ea819' 
      fontSize='17px'
      fontWeight='400' lineHeight='1'
      textTransform='uppercase' 
      color='#fff'
      border='1px solid gray'
      p='0.8875rem 1.875rem'
      borderRadius='3px'
      _hover={{bg:'#4ea819'}}
      >Sign In</Button></Link>
    </Box>

    </SimpleGrid>
</Box>

}

export default PriceSign;