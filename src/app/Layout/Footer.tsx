import React from "react";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id={styles.footer}>
      <div className={styles.home}>
        <Link to="/portfolio">Arch</Link>
      </div>
      <div className={styles.sections}>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/about">About us</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <Link to="/portfolio" className={styles.portfolio}>
        See Our Portfolio -->
      </Link>
    </div>
  );
};

export default Footer;
