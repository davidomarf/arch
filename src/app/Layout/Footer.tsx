import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div id={styles.footer}>
      <div className={styles.home}>
        <a href="/portfolio">Arch</a>
      </div>
      <div className={styles.sections}>
        <a href="/portfolio">Portfolio</a>
        <a href="/about">About us</a>
        <a href="/contact">Contact</a>
      </div>
      <button className={styles.portfolio}>See Our Portfolio --></button>
    </div>
  );
};

export default Footer;
