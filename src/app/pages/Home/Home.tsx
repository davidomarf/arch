import React from "react";

import styles from "./Home.module.scss";
import { Link } from "react-router-dom";

const Home = () => (
  <section className={styles.container}>
    <div className={styles.slider}>
      <img src="https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"></img>
      <HeroDescription
        title="Project Paramour"
        description="Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture."
      />
    </div>
  </section>
);

type HeroDescriptionProps = {
  title: string;
  description: string;
};
const HeroDescription = ({ title, description }: HeroDescriptionProps) => (
  <div className={styles.heroDescription}>
    <h2>{title}</h2>
    <p>{description}</p>
    <Link to="/portfolio" className={styles.portfolio}>
      See Our Portfolio -->
    </Link>
  </div>
);

export default Home;
