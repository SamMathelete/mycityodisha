import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./MainCarousel.module.css";

const MainCarousel = () => {
  return (
    <div className={styles["container"]}>
      <Carousel
        autoPlay
        className={styles["main-carousel"]}
        showThumbs={false}
        showArrows={true}
        showIndicators={true}
      >
        <div>
          <Image
            className={styles["main-carousel__image"]}
            alt="demo"
            src={img1}
          />
        </div>
        <div>
          <Image src={img2} alt="demo" />
        </div>
      </Carousel>
    </div>
  );
};

export default MainCarousel;
