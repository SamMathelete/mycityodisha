import FooterPrev from "./FooterPrev";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <FooterPrev />
      <footer className={styles.footer}>
        ©2023 MyCityOdisha. Designed, Developed and Maintained by SamTestLabs
      </footer>
    </>
  );
};

export default Footer;
