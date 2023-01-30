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
      <h1>{children}</h1>
    </div>
  );
};

export default WallText;
