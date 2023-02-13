import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";
import Image from "next/image";
import styles from "./MyCarousel.module.css";

const MyCarousel = () => {
  return (
    <Carousel className={styles.carousel} interval={2000} fade>
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
      <Carousel.Item>
        <Image className={styles["carousel-image"]} src={img3} alt="demo3" />
        <Carousel.Caption>
          <h3>Third Slide Label</h3>
          <p>Lorem Ipsum Dolor sit amet</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
