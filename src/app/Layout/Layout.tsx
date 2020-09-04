import React, { PropsWithChildren } from "react";

import styles from "./Layout.module.scss";
import NavBar from "./Navbar";

const Layout = ({ children }: PropsWithChildren<any>) => {
  return (
    <div className={styles.pageContainer}>
      <NavBar />
      <div className={styles.contentContainer}>{children}</div>
    </div>
  );
};

export default Layout;
