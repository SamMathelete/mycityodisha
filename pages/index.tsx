import Layout from "../components/UI/Layout";
import MainCarousel from "../components/UI/MainCarousel";
import TextImageLeft from "../components/UI/TextImageLeft";
import TextImageRight from "../components/UI/TextImageRight";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <Layout>
      <div className={styles.mainContainer}>
        <MainCarousel />
        <TextImageRight />
        <TextImageLeft />
      </div>
    </Layout>
  );
};

export default Home;
