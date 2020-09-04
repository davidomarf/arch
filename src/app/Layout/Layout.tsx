import React, { PropsWithChildren } from "react";
import Footer from "./Footer";
import styles from "./Layout.module.scss";
import NavBar from "./Navbar";

const Layout = ({ children }: PropsWithChildren<any>) => {
  return (
    <div className={styles.pageContainer}>
      <NavBar />
      <div className={styles.contentContainer}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
