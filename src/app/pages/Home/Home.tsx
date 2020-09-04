import React from "react";
import Hero from "./Hero";
import styles from "./Home.module.scss";

const Home = () => (
  <section className={styles.container}>
    <Hero />
  </section>
);

export default Home;
