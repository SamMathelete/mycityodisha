import React, { FC } from "react";
import styles from "./TestimonialCarousel.module.css";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";

interface Testimonial {
  name: string;
  position: string;
  testimonial: string;
}

interface Data {
  testimonials: Testimonial[];
}

const TestimonialCarousel: FC<Data> = ({ testimonials }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Testimonials</div>
      <Slider className={styles.carousel} {...settings}>
        {testimonials.map((testimonial) => (
          <div
            key={`${testimonial.testimonial}-${testimonial.name}-${testimonial.position}`}
          >
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
