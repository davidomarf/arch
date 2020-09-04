import React from "react";
import styles from "./Navbar.module.scss";

const NavBar = () => {
  return (
    <nav id={styles.mainNavigation}>
      <div className={styles.home}>
        <a href="/">Arch</a>
      </div>
      <div className={styles.sections}>
        <a href="/portfolio">Portfolio</a>
        <a href="/about">About us</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
};

export default NavBar;
