import React from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav id={styles.mainNavigation}>
      <div className={styles.home}>
        <Link to="/">Arch</Link>
      </div>
      <div className={styles.sections}>
        <Link to="/portfolio">Portfolio</Link>

        <Link to="/about">About us</Link>

        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default NavBar;
