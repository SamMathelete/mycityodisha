import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";
import styles from "./TextImageRight.module.css";

interface Props {
  title: string;
  description: string;
  image: StaticImageData;
  id: string;
  textStyle?: React.CSSProperties;
}

const TextImageRight: FC<Props> = ({
  id,
  title,
  description,
  image,
  textStyle,
}) => {
  return (
    <div id={id} className={styles["text-image-right"]}>
      <div className={styles["text-image-right__text"]}>
        <div className={styles["text-image-right__title"]}>{title}</div>
        <p className={styles["text-image-right__description"]}>{description}</p>
      </div>
      <div className={styles["text-image-right__image"]}>
        <Image src={image} className={styles["image"]} alt="demo" />
      </div>
    </div>
  );
};

export default TextImageRight;
