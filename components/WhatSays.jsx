"use client";

import ArrowLeft from "@/public/icons/arrowLeft.svg";
import ArrowRight from "@/public/icons/arrowRight.svg";
import Slide1 from "@/public/images/slider1.svg";
import Slide2 from "@/public/images/slider2.svg";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <Image src={ArrowRight} alt="" className={className} onClick={onClick} />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <Image src={ArrowLeft} alt="" className={className} onClick={onClick} />
  );
}

const WhatSays = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="gapBothSide container py-40">
      <p className="secTitle">See What People have to say</p>
      <div className="mt-[60px]">
        <Slider {...settings}>
          <Image src={Slide1} alt="" />
          <Image src={Slide2} alt="" />
          <Image src={Slide1} alt="" />
          <Image src={Slide2} alt="" />
        </Slider>
      </div>
    </div>
  );
};

export default WhatSays;
