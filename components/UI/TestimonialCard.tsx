import React, { FC } from "react";
import styles from "./TestimonialCard.module.css";

interface Props {
  name: string;
  position: string;
  testimonial: string;
}

const TestimonialCard: FC<Props> = ({ name, position, testimonial }) => {
  return (
    <div className={styles.card}>
      <div className={styles.heading}>
        <div className={styles.name}>{name}</div>
        <div className={styles.position}>{position}</div>
      </div>
      <div className={styles.testimonial}>{testimonial}</div>
    </div>
  );
};

export default TestimonialCard;
