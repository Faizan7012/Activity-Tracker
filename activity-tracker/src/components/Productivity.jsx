import { Box, Flex, Image, Text } from "@chakra-ui/react";
let data = [
  
  '12 AM','2 AM','4 AM','6 AM','8 AM','10 AM','12 PM','2 PM','4 PM','6 PM','8 PM','10 PM'
    ];
function Productivity(){
return  <><Box w='80%' m='auto' boxShadow='rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px' p='10px 20px'>
      <Text textAlign='left' color='#475056' fontSize='.875rem' mb='20px'>PRODUCTIVITY BAR</Text>
      <Box>
          <Box w='80%' m='auto' h='8.75rem !important' backgroundSize='cover !important' background='url(https://desktime.com/assets/img/employee-empty-productivity-bar.svg)'>
          </Box>
      </Box>
      <Box w='90%' m='auto'>
        <Flex justifyContent='space-between' mt='20px'>
             {
                data.map((ele)=>{
                return <Box>
              <Text fontSize='12px' color='#b2b2b2' key={ele}>{ele}</Text>
            </Box>
                })
              
              }
            
        </Flex>
      </Box>
</Box>
<Box w='80%' m='auto' mt='50px' p='10px 20px'>
<Box boxShadow='rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px' mb='30px'>
        <Box bg='#5fb92a' p='1px 20px'>
        <Text textAlign='left' color='#fff' fontSize='.875rem' mb='20px'>PRODUCTIVE APPS</Text>
        </Box>
        <Flex h='150px' alignItems='center' justifyContent='center' fontSize='16px' color='#b2b2b2'>
        No data collected
        </Flex>
      </Box>
      <Box boxShadow='rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px' mb='30px'>
        <Box bg='#f60' p='1px 20px'>
        <Text textAlign='left' color='#fff' fontSize='.875rem' mb='20px'>UNPRODUCTIVE APPS</Text>
        </Box>
        <Flex h='150px' alignItems='center' justifyContent='center' fontSize='16px' color='#b2b2b2'>
        No data collected
        </Flex>
      </Box>
      <Box boxShadow='rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px' mb='30px'>
        <Box bg='#999da1' p='1px 20px'>
        <Text textAlign='left' color='#fff' fontSize='.875rem' mb='20px'>NEUTRAL APPS</Text>
        </Box>
        <Flex h='150px' alignItems='center' justifyContent='center' fontSize='16px' color='#b2b2b2'>
        No data collected
        </Flex>
      </Box>
</Box>

</>


}


export default Productivity;