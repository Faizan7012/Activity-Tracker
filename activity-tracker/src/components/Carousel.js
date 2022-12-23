import Slider from "react-slick";
import CCard from "./CarouselCard";
import { useState } from "react";
import { AiFillRightSquare, AiFillLeftSquare } from "react-icons/ai";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// React slick carousel
const Carousel = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
      name: "Abhilash Subhash",
      role: "CEO",
      company: "Urolime Technologies",
      img: "https://desktime.com/static/web/testimonial-images/abhilash-subhash.png",
      desc: "DeskTime helped us to overcome the challenges of time tracking and reporting, especially for the fully remote work situation due to COVID-19. It also helped us to maintain the performance of our workforce as expected, both for employee availability and daily schedules. If you have remote workers in your team, I definitely recommend DeskTime!",
    },
    {
      name: "Gautam Khorana",
      role: "COO",
      company: "Seahawk media",
      img: "https://desktime.com/static/web/testimonial-images/gautam-khorana.jpg",
      desc: "I deployed DeskTime across my organisation about 2.5 months ago and it was one of my best decisions during these weird times. We are a quick growing company and have moved everyone to work from home mode indefinitely! It's easy to not only track but also reward/give praise to one of our hardest working teammates. Highly recommended to all.",
    },
    {
      name: "Pascale Tschaler",
      role: "Founder & Director",
      company: "TOA Agency",
      img: "https://desktime.com/static/web/testimonial-images/pascale-tschaler.jpg",
      desc: "DeskTime is a great solution to increase and control the productivity of our business. As we are an outsourcing company and work remotely alot, DeskTime is the perfect solution to keep track.",
    },
    {
      name: "Jessica de Wilde",
      role: "Head of people and culture at Building Stack",
      company: "Gotham Management Inc",
      img: "https://desktime.com/static/web/testimonial-images/gotham-management-inc.png",
      desc: "DeskTime has really helped us get a real-time snapshot of how and where our team spends their time. It’s helped us invest in better tools, boost productivity and improve our efficiency. It has also helped us identify some key employees who were previously flying under the radar – they've now quickly become great assets and given more freedom to work on complex projects outside their scope.",
    },

    {
      name: "Zack Thompson",
      role: "CEO",
      company: "Thompson Law",
      img: "https://desktime.com/static/web/testimonial-images/thompson-law.png",
      desc: "DeskTime has helped us see where our staff can more efficiently tend to our personal injury cases and the injured clients who need us. Whether working from home or at the office, it has improved overall productivity, efficiency, and most importantly has shown our diligence to be there for our personal injury clients in Dallas-Fort Worth and beyond when it matters most.",
    },
  ];

  return (
    <div className="content">
      <div className="controls">
        <AiFillLeftSquare onClick={sliderRef?.slickPrev} className="ctrbtn leftar" />
        <AiFillRightSquare onClick={sliderRef?.slickNext} className="ctrbtn rightar" />
      </div>
      <Slider className="slidercomp" ref={setSliderRef} {...sliderSettings}>
        {Cards.map((el) => (
          <CCard
            key={Date.now()}
            name={el.name}
            role={el.role}
            company={el.company}
            img={el.img}
            desc={el.desc}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
