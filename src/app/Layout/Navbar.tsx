import React, { PropsWithChildren } from "react";
import styles from "./Navbar.module.scss";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  let { pathname } = useLocation();

  return (
    <nav id={styles.mainNavigation}>
      <div className={styles.home}>
        <Link to="/">Arch</Link>
      </div>
      <div className={styles.sections}>
        <Link to="/portfolio" className={getClass(pathname, "/portfolio")}>
          Portfolio
        </Link>

        <Link to="/about" className={getClass(pathname, "/about")}>
          About us
        </Link>

        <Link to="/contact" className={getClass(pathname, "/contact")}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

function getClass(path: string, current: string) {
  return path === current ? styles.active : "";
}

export default NavBar;
