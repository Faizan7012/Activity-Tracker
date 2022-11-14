import { Box, Button, Center,Stack, ChakraProvider, Heading, SimpleGrid, Text, Accordion,
   AccordionIcon,
   AccordionItem,
   AccordionButton,
   AccordionPanel,
   Divider, } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PriceBox from "../components/pricing/priceBox";
import { pfData } from "../components/pricing/data";
import PriceSign from "../components/pricing/priceSign";
import Rated from "../components/pricing/Rated";
import TablePrice from "../components/pricing/Table";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
let rupee = ['₹513.33','₹733.33','₹1466.67'];
function Pricing(){
const [filter,setFilter] = useState('Monthly')
const [state,setState] = useState('Premium')
const handleState = (val)=>{
   setState(val)
}
useEffect(()=>{
  document.title = 'Pricing | Activity Tracker';
})
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
   return <PriceBox key={ele.type} state={state} handleState={handleState} type={ele.type} rs={filter=='Monthly'?ele.rs:rupee[index]} tx={ele.tx} data={ele.ft}/>
})

}
      </SimpleGrid>
      <Center>
      <PriceSign />

      </Center>

      <Rated />
   
   </Box>
   <Box mt='60px'>
<Carousel />
 </Box>

<Box>
<Box mt='80px'>
   <Heading>
   Comparison
   </Heading>
</Box>

<Box  w={['100','100%','90%','80%']} m='auto' mt='80px' mb='80px'>


<TablePrice cl={true} p1='Basic time tracking' p2='Free' p3='Pro' p4='Premium' p5='Enterprise' />
<TablePrice cl={false} p1='Automatic time tracking' p2='ok' p3='ok' p4='ok' p5='ok' />
<Divider borderTop='1px solid #c2c5c7'/>
<TablePrice cl={false} p1='Integrated web timer' p2='ok' p3='ok' p4='ok' p5='ok' />
<Divider borderTop='1px solid #c2c5c7'/>

<TablePrice cl={false} p1='Mobile app' p2='ok' p3='ok' p4='ok' p5='ok' />
<Divider borderTop='1px solid #c2c5c7'/>

<TablePrice cl={false} p1='URL and app tracking' p2='ok' p3='ok' p4='ok' p5='ok' />
<Divider borderTop='1px solid #c2c5c7'/>

<TablePrice cl={false} p1='Productivity calculation' p2='no' p3='ok' p4='ok' p5='ok' />
<Divider borderTop='1px solid #c2c5c7'/>

<TablePrice cl={false} p1='Idle time tracking' p2='no' p3='ok' p4='ok' p5='ok' />
<TablePrice cl={true} p1='project management' p2='Free' p3='Pro' p4='Premium' p5='Enterprise' />
<TablePrice cl={false} p1='Document title tracking' p2='no' p3='ok' p4='ok' p5='ok' />
<Divider borderTop='1px solid #c2c5c7'/>
<TablePrice cl={false} p1='Project time tracking' p2='no' p3='ok' p4='ok' p5='ok' />
<Divider borderTop='1px solid #c2c5c7'/>
<TablePrice cl={false} p1='Cost calculation' p2='no' p3='ok' p4='ok' p5='ok' />
<Divider borderTop='1px solid #c2c5c7'/>
<TablePrice cl={false} p1='Private time option' p2='no' p3='ok' p4='ok' p5='ok' />
<Divider borderTop='1px solid #c2c5c7'/>
<TablePrice cl={false} p1='Pomodoro timer' p2='no' p3='ok' p4='ok' p5='ok' />
<Divider borderTop='1px solid #c2c5c7'/>
<TablePrice cl={false} p1='Automatic screenshots' p2='no' p3='no' p4='ok' p5='ok' />
<TablePrice cl={true} p1='Custom features' p2='Free' p3='Pro' p4='Premium' p5='Enterprise' />
<TablePrice cl={false} p1='Team contacts' p2='no' p3='ok' p4='ok' p5='ok' />
<Divider borderTop='1px solid #c2c5c7'/>
<TablePrice cl={false} p1='Custom reports' p2='no' p3='ok' p4='ok' p5='ok' />
<Divider borderTop='1px solid #c2c5c7'/>
<TablePrice cl={false} p1='User integrations' p2='no' p3='ok' p4='ok' p5='ok' />
<Divider borderTop='1px solid #c2c5c7'/>

<TablePrice cl={false} p1='Absence calendar' p2='no' p3='no' p4='ok' p5='ok' />
<Divider borderTop='1px solid #c2c5c7'/>
<TablePrice cl={false} p1='Shift Scheduling' p2='no' p3='no' p4='ok' p5='ok' />
<Divider borderTop='1px solid #c2c5c7'/>
<TablePrice cl={false} p1='Booking' p2='no' p3='no' p4='ok' p5='ok' />
<Divider borderTop='1px solid #c2c5c7'/>
<TablePrice cl={false} p1='Invoicing' p2='no' p3='no' p4='ok' p5='ok' />
<Divider borderTop='1px solid #c2c5c7'/>
<TablePrice cl={false} p1='Company integrations' p2='no' p3='no' p4='ok' p5='ok' />
<Divider borderTop='1px solid #c2c5c7'/>
<TablePrice cl={false} p1='Offline time approval' p2='no' p3='no' p4='ok' p5='ok' />
<Divider borderTop='1px solid #c2c5c7'/>
<TablePrice cl={false} p1='IP restrictions' p2='no' p3='no' p4='ok' p5='ok' />
<Divider borderTop='1px solid #c2c5c7'/>
<TablePrice cl={false} p1='VIP support' p2='no' p3='no' p4='no' p5='ok' />
<Divider borderTop='1px solid #c2c5c7'/>
<TablePrice cl={false} p1='Personalized onboarding' p2='no' p3='no' p4='no' p5='ok' />
<Divider borderTop='1px solid #c2c5c7'/>
<TablePrice cl={false} p1='Unlimited projects and tasks' p2='no' p3='no' p4='no' p5='ok' />
<Divider borderTop='1px solid #c2c5c7'/>
<TablePrice cl={false} p1='Unlimited data history' p2='no' p3='no' p4='no' p5='ok' />
<Divider borderTop='1px solid #c2c5c7'/>
<TablePrice cl={false} p1='Custom API functions' p2='no' p3='no' p4='no' p5='ok' />





<Box mt='70px'>

   <Box>
      <Heading fontSize={['20px','20px','25px','30px']} mb='50px'>
      Frequently asked questions
      </Heading>
   </Box>

<Stack w="80%" m="auto" spacing="20px" mb='100px'>
            <Accordion allowToggle>
              <AccordionItem border="1px solid #dee2e6" borderRadius='5px' p='10px'>
                <h2>
                  <AccordionButton>
                    <Box
                      flex="1"
                      fontWeight="bold"
                      color="#475056"
                      textAlign="left"
                    >
                     How much does DeskTime cost?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel textAlign="left" pb={4}>
                DeskTime is free to try for 14 days and will always stay free for individual use with the LITE plan. Pricing plans start at $7/user and can go as low as $5.50/user for larger teams, if paid annually. Find out more here.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Accordion allowToggle>
              <AccordionItem border="1px solid #dee2e6" borderRadius='5px' p='10px'>
                <h2>
                  <AccordionButton>
                    <Box
                      flex="1"
                      fontWeight="bold"
                      color="#475056"
                      textAlign="left"
                    >
                     How can I subscribe?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel textAlign="left" pb={4}>
                In order to start using DeskTime Pro, click on ‘Add payment method’, choose the payment type - Credit card or PayPal, enter billing details and click ‘Save payment method’. The selected payment method will be automatically charged each billing cycle. Read more here.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Accordion allowToggle>
              <AccordionItem border="1px solid #dee2e6" borderRadius='5px' p='10px'>
                <h2>
                  <AccordionButton>
                    <Box
                      flex="1"
                      fontWeight="bold"
                      color="#475056"
                      textAlign="left"
                    >
                      What is the difference between monthly and annual billing?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel textAlign="left" pb={4}>
                The monthly billing plan charges your payment method on the first day of every month. The annual payment method charges once a year on the date when the plan was started, and offers a free month of subscription compared to the monthly plan. Find out more here.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Accordion allowToggle>
              <AccordionItem border="1px solid #dee2e6" borderRadius='5px' p='10px'>
                <h2>
                  <AccordionButton>
                    <Box
                      flex="1"
                      fontWeight="bold"
                      color="#475056"
                      textAlign="left"
                    >
                      How can I add or remove users from my plan?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel textAlign="left" pb={4}>
                To change the amount of users in your plan, click on the “Manage members“ option under “Team members count“. From there you can select the new amount of employees you need using the slider and clicking “Update“. For a more detailed guide, read this article.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Stack>
</Box>



</Box>

</Box>


<Footer />

    </ChakraProvider>
    


}

export default Pricing;