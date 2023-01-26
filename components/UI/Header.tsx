import {motion} from "framer-motion";
import styles from "./Header.module.css";
import {useState} from "react";
import Link from "next/link";
import SideDrawer from "./SideDrawer";
import MenuOutlinedIcon from "@ant-design/icons/MenuOutlined";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [drawer, setDrawer] = useState(false);

    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}>Logo</div>
                <nav className={styles.nav}>
                    <ul className={styles.links}>
                        <motion.li
                            className={styles.link}
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.95}}
                        >
                            <Link href="/">
                                Home
                            </Link>
                        </motion.li>
                        <motion.li
                            className={styles.link}
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.95}}
                        >
                            <Link href="/about">
                                About
                            </Link>
                        </motion.li>
                        <motion.li
                            className={styles.link}
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.95}}
                            onHoverStart={() => setIsOpen(true)}
                            onHoverEnd={() => setIsOpen(false)}
                        >
                            <Link href="/projects">
                                Projects
                            </Link>
                            <motion.div
                                className={styles.dropdown}
                                animate={{height: isOpen ? "auto" : 0}}
                                transition={{duration: 0.3}}
                            >
                                <motion.ul className={styles.dropdownLinks}>
                                    <motion.li
                                        className={styles.link}
                                        whileHover={{scale: 1.1}}
                                        whileTap={{scale: 0.95}}
                                    >
                                        <Link href="/projects/web">
                                            Project 1
                                        </Link>
                                    </motion.li>
                                    <motion.li
                                        className={styles.link}
                                        whileHover={{scale: 1.1}}
                                        whileTap={{scale: 0.95}}
                                    >
                                        <Link href="/projects/mobile">
                                            Project 2
                                        </Link>
                                    </motion.li>
                                </motion.ul>
                            </motion.div>
                        </motion.li>
                        <motion.li
                            className={styles.link}
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.95}}
                        >
                            <Link href="/services">
                                Services
                            </Link>
                        </motion.li>
                        <motion.li
                            className={styles.link}
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.95}}
                        >
                            <Link href="/contact">
                                Contact
                            </Link>
                        </motion.li>
                    </ul>
                    <MenuOutlinedIcon className={styles.menuButton} onClick={() => setDrawer(true)}/>
                </nav>
            </header>
            {drawer && <SideDrawer onClose={() => setDrawer(false)}/>}
        </>
    );
};

export default Header;