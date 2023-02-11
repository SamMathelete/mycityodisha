import styles from "./CallExperts.module.css";

const CallExperts = () => {
  return (
    <>
      <div className={styles["call-experts__line"]}>
        <div className={styles["call-experts__line__text"]}>OR</div>
      </div>
      <div className={styles["call-experts"]}>
        <div className={styles["call-experts__title"]}>
          Call us for a free consultation at
        </div>
        <div className={styles["call-experts__phone"]}>+91 9586753298</div>
      </div>
    </>
  );
};

export default CallExperts;
