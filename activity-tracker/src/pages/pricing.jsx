import { Box, Button, Center, ChakraProvider, Heading, SimpleGrid, Text, Accordion,
   AccordionItem,
   AccordionButton,
   AccordionPanel, } from "@chakra-ui/react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import PriceBox from "../components/pricing/priceBox";
import { pfData } from "../components/pricing/data";
import PriceSign from "../components/pricing/priceSign";
import Rated from "../components/pricing/Rated";
import TablePrice from "../components/pricing/Table";
import {AddIcon,MinusIcon} from '@chakra-ui/icons';
let rupee = ['₹513.33','₹733.33','₹1466.67'];
function Pricing(){
const [filter,setFilter] = useState('Monthly')
    return<ChakraProvider>
    <Navbar />
    <Box fontFamily='Source Sans Pro,sans-serif' w={['90%','90%','90%','80%']} pt='130px'  m='auto'>
     <Box w={['100%','100%','100%','50%']} m='auto'>
        <Heading color='#333c43' fontWeight='700' fontSize={['20px','20px','30px','35px']} mb='30px'>Get the best price for your team</Heading>
        <Text fontFamily='Source Sans Pro,sans-serif' fontWeight='400' color='#475056' fontSize='16px'>The industry-leading automatic time tracking and management system. If you'd like to get a personalised pricing quote contact us here.</Text>
     </Box>

     <Box mt='50px'>
        <Button p='20px 30px' _hover='none' textTransform='unset' border={filter=='Annual'?'1px solid gray':'1px solid #262c30'} borderRadius='3px 0px 0px 3px' color={filter=='Monthly'?"white":'#333c43'} onClick={()=>setFilter('Monthly')} bg={filter=='Monthly'?'#333c43':"white"}>Monthly</Button>
        <Button p='20px 30px' _hover='none' textTransform='unset' border={filter=='Monthly'?'1px solid gray':'1px solid #262c30'} borderRadius='0px 3px 3px 0px' color={filter=='Annual'?"white":'#333c43'} onClick={()=>setFilter('Annual')} bg={filter=='Annual'?'#333c43':"white"}>Annual</Button>
         <Heading mt='30px' fontSize='15px'><span style={{color:'#00d084'}}>1 Month</span> free with annual plan</Heading>
     </Box>
      <SimpleGrid alignItems='center' w={['100','100%','90%','85%']} m='auto' mt='80px' columns={['1','1','2','3']} spacing='30px'>
      {

pfData.map((ele,index)=>{
   return <PriceBox key={ele.type} type={ele.type} rs={filter=='Monthly'?ele.rs:rupee[index]} tx={ele.tx} data={ele.ft}/>
})

}
      </SimpleGrid>
      <Center>
      <PriceSign />

      </Center>

      <Rated />
   
   </Box>
<Box>
<Box>
   <Heading>
   Comparison
   </Heading>
</Box>

<Box  w={['100','100%','90%','80%']} m='auto' mt='80px' mb='80px'>

<TablePrice p1='PR Comments' p2='ok' p3='ok' p4='ok' p5='ok' />
 <TablePrice p1='Checks' p2='ok' p3='ok' p4='ok' p5='ok' />
 <TablePrice p1='Flags' p2='ok' p3='ok' p4='ok' p5='ok' />
 <TablePrice p1='Carryforward Flags' p2='ok' p3='no' p4='ok' p5='ok' />
 <TablePrice p1='API Access' p2='no' p3='no' p4='no' p5='ok' />
 <TablePrice p1='Impact Analysis' p2='no' p3='no' p4='no' p5='ok' />


</Box>

</Box>

    </ChakraProvider>
    


}

export default Pricing;