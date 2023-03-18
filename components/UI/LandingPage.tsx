import Image from "next/image";
import landing from "../../assets/images/landing.svg";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.title}>Invest in Land, Invest in Future</div>
        <div className={styles.description}>
          Secure your future with us - Invest in Land today! Our company
          specializes in identifying the most promising investment opportunities
          in real estate. With our expert guidance and extensive market
          knowledge, we help you make wise decisions that yield great returns.
          Trust us to be your partner in building a brighter tomorrow. Discover
          your dream property now!
        </div>
      </div>
      <div className={styles.rightContainer}>
        <Image src={landing} alt="Landing Image" width={500} height={375} />
      </div>
    </div>
  );
};

export default LandingPage;
