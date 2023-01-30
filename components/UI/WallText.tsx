import React, { FC } from "react";
import styles from "./WallText.module.css";

interface Props {
  children: React.ReactNode;
  image: string;
}

const WallText: FC<Props> = ({ children, image }) => {
  return (
    <div
      className={styles.wall}
      style={{
        backgroundImage: `url('${image}')`,
        backgroundSize: "cover",
      }}
    >
      <div className={styles["wall-text"]}>{children}</div>
    </div>
  );
};

export default WallText;
