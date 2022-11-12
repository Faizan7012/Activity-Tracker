import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import Dashboard_Nav from "../components/Dashboard_Nav";
import Footer from "../components/Footer";
import MyDesktime from "../components/MyDesktime";
import Productivity from "../components/Productivity";
import Sidebar from "../components/Sidebar/SideBar";
import Project_Descrip from "../components/Demo_Component/Project_Descrip"
import Project from "../components/Demo_Component/Project"

export default function Projects (){

    return (
        <ChakraProvider>
             {/* <Box> */}
            <Flex bg="#EBECEC" >
                
                <Sidebar  />
                
               
                <Box w="85%">
                    <Dashboard_Nav />
                    <Project_Descrip/>
                    <Project/>
                    <Footer/>
                </Box>

            </Flex>

        {/* </Box> */}
        </ChakraProvider>
       
    )
}