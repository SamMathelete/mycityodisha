import Image from "next/image";
import React from "react";
import demo from "../../assets/images/img1.jpg";
import styles from "./TextImageRight.module.css";

const TextImageRight = () => {
  return (
    <div className={styles["text-image-right"]}>
      <div className={styles["text-image-right__text"]}>
        <div className={styles["text-image-right__title"]}>Title</div>
        <p className={styles["text-image-right__description"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          condimentum, nisl ut aliquam lacinia, nunc nisl aliquam lorem, eget
          aliquam nisl nisl sit amet nunc. Nulla facilisi. Nulla facilisi.
        </p>
      </div>
      <div className={styles["text-image-right__image"]}>
        <Image src={demo} className={styles["image"]} alt="demo" />
      </div>
    </div>
  );
};

export default TextImageRight;
