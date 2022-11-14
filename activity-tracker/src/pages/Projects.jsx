import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import Dashboard_Nav from "../components/Dashboard_Nav";
import Footer from "../components/Footer";
import MyDesktime from "../components/MyDesktime";
import Productivity from "../components/Productivity";
import Sidebar from "../components/Sidebar/SideBar";

import Project_Descrip from "../components/Demo_Component/Project_Descrip"
import Project from "../components/Demo_Component/Project"
import Timer from "../components/Timer";
import { useEffect } from "react";

export default function Projects (){
    useEffect(()=>{
        document.title = 'Project | Activity Tracker';
      })
    return (
        <ChakraProvider>
        
            <Flex bg="#EBECEC" >
                
                <Sidebar  />
                
               
                <Box w="85%">
                    <Dashboard_Nav />
                    <Timer  />
                    <Project_Descrip/>
                    <Project/>
                    <Footer/>
                </Box>

            </Flex>
        </ChakraProvider>
       
    )
}
