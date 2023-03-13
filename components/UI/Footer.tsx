import FooterPrev from "./FooterPrev";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <FooterPrev />
      <footer className={styles.footer}>
        ©2023 MyCityOdisha
        <br />
        Best viewed in Chrome, Firefox, Safari and Edge at 1366x768 px.
      </footer>
    </>
  );
};

export default Footer;
