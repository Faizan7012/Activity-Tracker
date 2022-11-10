import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { ChakraProvider } from "@chakra-ui/react";
import DemoPage from "../pages/DemoPage";
import AboutDeskTime from "../pages/AboutDeskTime";
import Blog from "../pages/Blog";


function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/demo" element={<DemoPage />}></Route>
            <Route path="/pricing" element={<div>Pricing</div>}></Route>
            <Route path="/features" element={<div>Features</div>}></Route>
            <Route path="/aboutus" element={<AboutDeskTime />}></Route>
            <Route path="/faq" element={<div>FAQ</div>}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/login" element={<div>LOGIN</div>}></Route>
            <Route path="/signup" element={<div>SIGN UP</div>}></Route>
        </Routes>
    )
}

export default AllRoutes;