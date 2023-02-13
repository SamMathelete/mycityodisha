import Layout from "../components/UI/Layout";
import TextImageLeft from "../components/UI/TextImageLeft";
import TextImageRight from "../components/UI/TextImageRight";
import Image from "next/image";
import styles from "./Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCarousel from "../components/UI/TestimonialCarousel";
import DUMMY_TESTIMONIALS from "../data/dummytestimonials";
import GetInTouchForm from "../components/UI/GetInTouchForm";
import residential from "../assets/images/residential.jpeg";
import commercial from "../assets/images/commercial.png";
import property from "../assets/images/property.jpeg";
import CallExperts from "../components/UI/CallExperts";
import img1 from "../assets/images/1.png";

const Home = () => {
  return (
    <Layout>
      <div className={styles.mainContainer}>
        <Image
          src={img1}
          style={{
            width: "100%",
            height: "100%",
          }}
          alt="main"
        />
        <TextImageRight
          id="about"
          title="About Us"
          description="
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed euismod, nisl nec tincidunt lacinia, nunc est aliquam
            nunc, eget aliquam nisl nisl sit amet nisl. Sed euismod,
            nisl nec tincidunt lacinia, nunc est aliquam nunc, eget
            aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec
            tincidunt lacinia, nunc est aliquam nunc, eget aliquam.
          "
          image={property}
        />
        <TextImageLeft
          id="residential"
          title="Residential"
          description="
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed euismod, nisl nec tincidunt lacinia, nunc est aliquam
            nunc, eget aliquam nisl nisl sit amet nisl. Sed euismod,
            nisl nec tincidunt lacinia, nunc est aliquam nunc, eget
            aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec
            tincidunt lacinia, nunc est aliquam nunc, eget aliquam.
          "
          image={residential}
        />
        <TextImageRight
          id="commercial"
          title="Commercial"
          description="
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed euismod, nisl nec tincidunt lacinia, nunc est aliquam
            nunc, eget aliquam nisl nisl sit amet nisl. Sed euismod,
            nisl nec tincidunt lacinia, nunc est aliquam nunc, eget
            aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec
            tincidunt lacinia, nunc est aliquam nunc, eget aliquam.
          "
          image={commercial}
        />
        <TestimonialCarousel testimonials={DUMMY_TESTIMONIALS} />
        <GetInTouchForm />
        <CallExperts />
      </div>
    </Layout>
  );
};

export default Home;
