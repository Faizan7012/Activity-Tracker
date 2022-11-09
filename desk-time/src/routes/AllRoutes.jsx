import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { ChakraProvider } from "@chakra-ui/react";

function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/demo" element={<div>Demo</div>}></Route>
            <Route path="/pricing" element={<div>Pricing</div>}></Route>
            <Route path="/features" element={<div>Features</div>}></Route>
            <Route path="/aboutus" element={<div>About us</div>}></Route>
            <Route path="/faq" element={<div>FAQ</div>}></Route>
            <Route path="/blog" element={<div>Blog</div>}></Route>
            <Route path="/login" element={<div>LOGIN</div>}></Route>
            <Route path="/signup" element={<div>SIGN UP</div>}></Route>
        </Routes>
    )
}

export default AllRoutes;