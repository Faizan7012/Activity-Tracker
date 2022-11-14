import React, { useEffect } from "react";
import BottomUp from "../components/Demo_Component/BottomUp";
import Cards from "../components/Demo_Component/Cards";
import Header_Section from "../components/Demo_Component/Header_Section";
import Reviews from "../components/Demo_Component/Reviews";
import YoutubePlayer1 from "../components/Demo_Component/YoutubePlayer1";
import YoutubePlayer2 from "../components/Demo_Component/YoutubePlayer2";
import YoutubePlayer3 from "../components/Demo_Component/YoutubePlayer3";
import BottomMost from "../components/Demo_Component/BottomMost";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

function DemoPage(props) {

  useEffect(()=>{
    document.title = 'Demo | Activity Tracker';
  })


  return (
    <ChakraProvider>
      <Navbar />
      <Header_Section />
      <Cards />
      <YoutubePlayer1 />
      <YoutubePlayer2 />
      <YoutubePlayer3 />
      <Reviews />
      <BottomUp />
      <Carousel />
      <BottomMost />
      <Footer />
    </ChakraProvider>
  );
}

export default DemoPage;
