import Image from "next/image";
import React from "react";
import demo from "../../assets/images/img1.jpg";
import styles from "./TextImageLeft.module.css";

const TextImageLeft = () => {
  return (
    <div className={styles["text-image-left"]}>
      <div className={styles["text-image-left__text"]}>
        <div className={styles["text-image-left__title"]}>Title</div>
        <p className={styles["text-image-left__description"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          condimentum, nisl ut aliquam lacinia, nunc nisl aliquam lorem, eget
          aliquam nisl nisl sit amet nunc. Nulla facilisi. Nulla facilisi.
        </p>
      </div>
      <div className={styles["text-image-left__image"]}>
        <Image src={demo} className={styles["image"]} alt="demo" />
      </div>
    </div>
  );
};

export default TextImageLeft;
