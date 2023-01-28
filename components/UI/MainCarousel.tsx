import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MainCarousel = () => {
  return (
    <Carousel autoPlay>
      <div>
        <Image alt="demo" src={img1} />
        <p>Demo 1</p>
      </div>
      <div>
        <Image src={img2} alt="demo" />
        <p>Demo 2</p>
      </div>
    </Carousel>
  );
};

export default MainCarousel;
