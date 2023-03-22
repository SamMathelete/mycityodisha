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
import LandingPage from "../components/UI/LandingPage";

const Home = () => {
  return (
    <Layout>
      <div className={styles.mainContainer}>
        <LandingPage />
        <TextImageRight
          id="about"
          title="About Us"
          description="
            Welcome to MyCityOdisha, a leading real estate company based in Bhubaneswar, Odisha. 
            Our mission is to help you find your dream home in one of the most beautiful and vibrant cities in India.
            At MyCityOdisha, we understand that buying or selling a property can be a complex and time-consuming process. That is why we offer a range of services designed to make the process as smooth and stress-free as possible. Our team of experienced real estate professionals is dedicated to helping you find the perfect home, whether you are looking for an apartment, a villa, or a plot of land.
          "
          image={property}
        />
        <TextImageLeft
          id="residential"
          title="Residential"
          description="
            We offer a wide range of properties to suit all budgets and requirements, from affordable apartments in bustling city centers to luxurious villas in peaceful suburban neighborhoods. Our team will work closely with you to understand your needs and preferences, and help you find a property that meets your exact specifications.

In addition to our real estate services, we also offer a range of other services designed to help you settle into your new home. These include interior design services, relocation assistance, and property management services.
          "
          image={residential}
        />
        <TextImageRight
          id="commercial"
          title="Commercial"
          description="
          Bhubaneswar, the capital city of Odisha, is known for its rich cultural heritage, beautiful temples, and stunning natural beauty. It is also one of the fastest-growing cities in India, with a rapidly expanding economy and a booming real estate market. Whether you are looking to buy, sell, or rent a property in Bhubaneswar, MyCityOdisha is here to help.
          "
          image={commercial}
        />
        {/*<TestimonialCarousel testimonials={[]} />*/}
        <GetInTouchForm />
        <CallExperts />
      </div>
    </Layout>
  );
};

export default Home;
