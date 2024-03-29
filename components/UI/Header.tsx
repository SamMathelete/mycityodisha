import { motion } from "framer-motion";
import styles from "./Header.module.css";
import { useState } from "react";
import Link from "next/link";
import SideDrawer from "./SideDrawer";
import MenuOutlinedIcon from "@ant-design/icons/MenuOutlined";
import Image from "next/image";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [drawer, setDrawer] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image width={100} height={60} src={logo} alt="logo" />
        </div>
        <nav className={styles.nav}>
          <ul className={styles.links}>
            <motion.li
              className={styles.link}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/">Home</Link>
            </motion.li>
            <motion.li
              className={styles.link}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/#about">About</Link>
            </motion.li>
            <motion.li
              className={styles.link}
              whileHover={{ scale: 1.1 }}
              onHoverStart={() => setIsOpen(true)}
              onHoverEnd={() => setIsOpen(false)}
            >
              <Link href="/Projects">Projects</Link>
              <motion.div
                className={styles.dropdown}
                animate={{ height: isOpen ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.ul className={styles.dropdownLinks}>
                  <motion.li
                    className={styles.link}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Link href="/Projects/1">Project Vasudev Vihar</Link>
                  </motion.li>
                </motion.ul>
              </motion.div>
            </motion.li>
            <motion.li
              className={styles.link}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/#GetIntoTouch">Contact</Link>
            </motion.li>
          </ul>
          <MenuOutlinedIcon
            className={styles.menuButton}
            onClick={() => setDrawer(true)}
          />
        </nav>
      </header>
      {drawer && <SideDrawer onClose={() => setDrawer(false)} />}
    </>
  );
};

export default Header;
