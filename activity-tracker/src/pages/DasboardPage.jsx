import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import Dashboard_Nav from "../components/Dashboard_Nav";
import Footer from "../components/Footer";
import MyDesktime from "../components/MyDesktime";
import Productivity from "../components/Productivity";
import Sidebar from "../components/Sidebar/SideBar";

export default function DashboardPage (){

    return (
        <ChakraProvider>
             {/* <Box> */}
            <Flex bg="#EBECEC" >
                
                <Sidebar  />
                
               
                <Box w="85%">
                    <Dashboard_Nav />
                    <MyDesktime />
                    <Productivity />
                    <Footer/>
                </Box>

            </Flex>

        {/* </Box> */}
        </ChakraProvider>
       
    )
}