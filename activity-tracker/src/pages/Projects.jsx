import Footer from "../components/Footer";
import Project from "../components/Demo_Component/Project";
import Timer from "../components/Timer";
import { Box, ChakraProvider, Flex , useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import {Sidebar} from '../components/sidebar&navbar/Sidebar'
import Navbar from '../components/sidebar&navbar/Navbar'
import Projectdesc from "../components/Demo_Component/Projectdescrip";
function Projects(){
  const { isOpen,onOpen, onClose } = useDisclosure();
  useEffect(() => {
    document.title = "Projects | Activity Tracker";
  });
    return <ChakraProvider>

             <Flex w='100%' bg="#EBECEC">
             <Sidebar isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
             <Box w={['100%','100%','100%','80%']} ml={['0px','0px','0px','20%']} mb='60px'>
             <Navbar onOpen={onOpen}/>
             <Box w='90%' m='auto'>
             <Timer />
             <Projectdesc />
             <Project />
             <Footer />

             </Box>
             </Box>
           </Flex>

      </ChakraProvider>
}

export default Projects ;