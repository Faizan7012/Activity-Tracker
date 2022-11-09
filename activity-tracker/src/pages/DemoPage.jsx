import React from "react";
import BottomUp from "../components/Demo_Component/BottomUp";
import Cards from "../components/Demo_Component/Cards";
import Header_Section from "../components/Demo_Component/Header_Section";
import Reviews from "../components/Demo_Component/Reviews";
import YoutubePlayer1 from "../components/Demo_Component/YoutubePlayer1";
import YoutubePlayer2 from "../components/Demo_Component/YoutubePlayer2";
import YoutubePlayer3 from "../components/Demo_Component/YoutubePlayer3";
import BottomMost from "../components/Demo_Component/BottomMost";
function DemoPage(props) {
  return (
    <div>
      <Header_Section />
      <Cards />
      <YoutubePlayer1 />
      <YoutubePlayer2 />
      <YoutubePlayer3 />
      <Reviews />
      <BottomUp />
      <BottomMost />
    </div>
  );
}

export default DemoPage;
