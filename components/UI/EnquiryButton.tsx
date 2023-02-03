import React from "react";
import styles from "./EnquiryButton.module.css";

const EnquiryButton = () => {
  return (
    <div className={styles["enquiry-button"]}>
      <div className={styles["enquiry-button-text"]}>
        <a href="#GetIntoTouch">ENQUIRY</a>
      </div>
    </div>
  );
};

export default EnquiryButton;
