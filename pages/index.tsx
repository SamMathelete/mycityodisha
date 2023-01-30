import Layout from "../components/UI/Layout";
import MyCarousel from "../components/UI/MyCarousel";
import TextImageLeft from "../components/UI/TextImageLeft";
import TextImageRight from "../components/UI/TextImageRight";
import styles from "./Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <Layout>
      <div className={styles.mainContainer}>
        <div className={styles["carousel-container"]}>
          <MyCarousel />
        </div>
        <TextImageRight />
        <TextImageLeft />
      </div>
    </Layout>
  );
};

export default Home;
