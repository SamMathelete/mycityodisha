import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";
import styles from "./TextImageLeft.module.css";

interface Props {
  title: string;
  description: string;
  image: StaticImageData;
}

const TextImageLeft: FC<Props> = ({ title, description, image }) => {
  return (
    <div className={styles["text-image-left"]}>
      <div className={styles["text-image-left__text"]}>
        <div className={styles["text-image-left__title"]}>{title}</div>
        <p className={styles["text-image-left__description"]}>{description}</p>
      </div>
      <div className={styles["text-image-left__image"]}>
        <Image src={image} className={styles["image"]} alt="demo" />
      </div>
    </div>
  );
};

export default TextImageLeft;
