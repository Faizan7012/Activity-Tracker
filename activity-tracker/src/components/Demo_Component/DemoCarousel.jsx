import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
function DemoCarousel() {
  return (
    <Carousel>
      <div>
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
}

export default DemoCarousel;
