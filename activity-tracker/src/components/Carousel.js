import Slider from "react-slick";
import CCard from "./CarouselCard";
import { useState } from "react";
import { AiFillRightSquare, AiFillLeftSquare } from "react-icons/ai";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// function SampleNextArrow({ className, style, onClick, sliderRef }) {
//   return <AiFillLeftSquare onClick={sliderRef?.slickPrev} className="ctrbtn lbtn" />
// }

// function SamplePrevArrow({ className, style, onClick, sliderRef }) {
//   return <AiFillRightSquare onClick={sliderRef?.slickNext} className="ctrbtn rbtn" />
// }

const Carousel = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    initialSlide: 0,
    // nextArrow: <SampleNextArrow sliderRef={sliderRef} />,
    // prevArrow: <SamplePrevArrow sliderRef={sliderRef} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 924,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const Cards = [
    {
      name: "Barrett Kuethen",
      role: "Operations Manager at Amtec",
      company: "Amtec",
      img: "https://desktime.com/static/web/testimonial-images/amtec.png",
      desc: "DeskTime has been an invaluable tool not only for managing our growingteam across the globe but also for raising employees awareness and increasing their engagement",
    },
    {
      name: "Barrett Kuethen",
      role: "Operations Manager at Amtec",
      company: "Amtec",
      img: "https://desktime.com/static/web/testimonial-images/amtec.png",
      desc: "DeskTime has been an invaluable tool not only for managing our growingteam across the globe but also for raising employees awareness and increasing their engagement",
    },
    {
      name: "Barrett Kuethen",
      role: "Operations Manager at Amtec",
      company: "Amtec",
      img: "https://desktime.com/static/web/testimonial-images/amtec.png",
      desc: "DeskTime has been an invaluable tool not only for managing our growingteam across the globe but also for raising employees awareness and increasing their engagement",
    },
    {
      name: "Barrett Kuethen",
      role: "Operations Manager at Amtec",
      company: "Amtec",
      img: "https://desktime.com/static/web/testimonial-images/amtec.png",
      desc: "DeskTime has been an invaluable tool not only for managing our growingteam across the globe but also for raising employees awareness and increasing their engagement",
    }
  ];

  return (
    <div className="content">
      <div className="controls">
          <AiFillLeftSquare onClick={sliderRef?.slickPrev} className="ctrbtn" />
          <AiFillRightSquare onClick={sliderRef?.slickNext} className="ctrbtn" />
      </div>
      <Slider className="slidercomp" ref={setSliderRef} {...sliderSettings}>
        { Cards.map(el => <CCard
          key={Date.now()}
          name={el.name}
          role={el.role}
          company={el.company}
          img={el.img}
          desc={el.desc}
        />)}
      </Slider>
    </div>
  );
};

// adadad

export default Carousel;
