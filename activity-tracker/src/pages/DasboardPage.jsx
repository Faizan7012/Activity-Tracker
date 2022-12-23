import { Box, ChakraProvider, Flex , useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import Footer from "../components/Footer";
import MyDesktime from "../components/MyDesktime";
import Productivity from "../components/Productivity";
import {Sidebar} from '../components/sidebar&navbar/Sidebar'
import Navbar from '../components/sidebar&navbar/Navbar'
function DashboardPage(){
  const { isOpen,onOpen, onClose } = useDisclosure();
  useEffect(() => {
    document.title = "Dashboard | Activity Tracker";
  });
    return <ChakraProvider>

             <Flex w='100%' bg="#EBECEC">
             <Sidebar isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
             <Box w={['100%','100%','100%','80%']} ml={['0px','0px','0px','20%']} mb='60px'>
             <Navbar onOpen={onOpen}/>
             <Box w='90%' m='auto'>
             <MyDesktime />
             <Productivity />
             <Footer />

             </Box>
             </Box>
           </Flex>

      </ChakraProvider>
}

export default DashboardPage ;
