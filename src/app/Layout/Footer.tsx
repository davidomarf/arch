import React from "react";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as ArchLogo } from "../assets/img/logo.svg";
import { ReactComponent as ArrowIcon } from "../assets/img/icons/icon-arrow.svg";

const Footer = () => {
  return (
    <div id={styles.footer}>
      <div className={styles.home}>
        <Link to="/">
          <ArchLogo />
        </Link>
      </div>
      <div className={styles.sections}>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/about">About us</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <Link to="/portfolio" className={styles.portfolio}>
        See Our Portfolio <ArrowIcon />
      </Link>
    </div>
  );
};

export default Footer;
