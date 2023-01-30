import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import Image from "next/image";
import styles from "./MyCarousel.module.css";

const MyCarousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Image className={styles["carousel-image"]} src={img1} alt="demo1" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className={styles["carousel-image"]} src={img2} alt="demo2" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
