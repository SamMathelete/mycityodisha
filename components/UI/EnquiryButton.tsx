import Link from "next/link";
import React from "react";
import styles from "./EnquiryButton.module.css";

const EnquiryButton = () => {
  return (
    <div className={styles["enquiry-button"]}>
      <div className={styles["enquiry-button-text"]}>
        <Link href="/#GetIntoTouch">ENQUIRY</Link>
      </div>
    </div>
  );
};

export default EnquiryButton;
