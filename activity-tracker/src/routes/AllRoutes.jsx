import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { ChakraProvider } from "@chakra-ui/react";
import DemoPage from "../pages/DemoPage";
import AboutDeskTime from "../pages/AboutDeskTime";
import { Faq } from "../pages/Faq";



function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/demo" element={<DemoPage />}></Route>
            <Route path="/pricing" element={<div>Pricing</div>}></Route>
            <Route path="/features" element={<div>Feature</div>}></Route>
            <Route path="/aboutus" element={<AboutDeskTime />}></Route>
            <Route path="/faq" element={<Faq/>}></Route>
            <Route path="/blog" element={<div>Blog</div>}></Route>
            <Route path="/login" element={<div>LOGIN</div>}></Route>
            <Route path="/signup" element={<div>SIGN UP</div>}></Route>
        </Routes>
    )
}

export default AllRoutes;