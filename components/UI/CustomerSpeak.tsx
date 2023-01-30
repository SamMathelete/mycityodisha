import React from "react";
import styles from "./CustomerSpeak.module.css";

interface Props {
  quote: string;
  author: string;
}

const CustomerSpeak: React.FC<Props> = ({ quote, author }) => {
  return (
    <div className={styles.container}>
      <div className={styles.internal}>
        <p className={styles.quote}>{quote}</p>
        <p className={styles.author}>- {author}</p>
      </div>
    </div>
  );
};

export default CustomerSpeak;
