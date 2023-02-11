import { motion } from "framer-motion";
import styles from "./SideDrawer.module.css";
import { FC, useState } from "react";
import Link from "next/link";
import { CloseOutlined } from "@ant-design/icons";

interface Props {
  onClose: () => void;
}

const SideDrawer: FC<Props> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      className={styles.drawer}
      initial={{ x: "100vw" }}
      animate={{ x: "50vw" }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <div className={styles.content}>
        <CloseOutlined
          style={{
            fontSize: "1.5rem",
          }}
          onClick={onClose}
        />
        <ul className={styles.links}>
          <motion.li className={styles.link} whileTap={{ scale: 0.95 }}>
            <Link href="/">Home</Link>
          </motion.li>
          <motion.li className={styles.link} whileTap={{ scale: 0.95 }}>
            <Link href="#about">About</Link>
          </motion.li>
          <motion.li
            className={styles.link}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen((state) => !state)}
          >
            <div className={styles.fakeLink}>Projects</div>
            {isOpen && (
              <>
                <motion.li
                  className={styles.sublink}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/Projects/1">Project 1</Link>
                </motion.li>
                <motion.li
                  className={styles.sublink}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/Projects/2">Project 2</Link>
                </motion.li>
              </>
            )}
          </motion.li>
          <motion.li className={styles.link} whileTap={{ scale: 0.95 }}>
            <Link href="#GetIntoTouch">Contact</Link>
          </motion.li>
        </ul>
      </div>
    </motion.div>
  );
};

export default SideDrawer;
