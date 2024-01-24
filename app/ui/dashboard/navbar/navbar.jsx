"use client";
import styles from "./navbar.module.css";
import {
  MdNotifications,
  MdOutlineChat,
} from "react-icons/md";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>SchoolGate</div>
      <div className={styles.menu}>
        <div className={styles.search}>
         <h2>Invitation</h2>
          
        </div>
        <div className={styles.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
