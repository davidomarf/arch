import React, { useState } from "react";

import styles from "./Hero.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowIcon } from "../../assets/img/icons/icon-arrow.svg";

type HeroProps = {
  items: HeroItem[];
};
const Hero = ({ items }: HeroProps) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className={styles.hero}>
      <img src={items[current].image} alt={items[current].info.title}></img>
      <HeroDescription
        title={items[current].info.title}
        description={items[current].info.description}
      />
      <HeroNavigation
        total={items.length}
        current={current}
        setCurrent={setCurrent}
      />
    </div>
  );
};

type HeroItem = {
  info: HeroDescriptionProps;
  image: string;
};

type HeroDescriptionProps = {
  title: string;
  description: string;
};
const HeroDescription = ({ title, description }: HeroDescriptionProps) => (
  <div className={styles.heroDescription}>
    <h2>{title}</h2>
    <p>{description}</p>
    <Link to="/portfolio" className={styles.portfolio}>
      See Our Portfolio <ArrowIcon />
    </Link>
  </div>
);

type HeroNavigationProps = {
  total: number;
  current: number;
  setCurrent: (index: number) => void;
};
const HeroNavigation = ({
  total,
  current,
  setCurrent
}: HeroNavigationProps) => {
  const arr = [...Array(total).keys()];

  return (
    <div className={styles.navigation}>
      {arr.map((e) => (
        <div
          key={e}
          className={`${styles.squareButton} ${
            current === e ? styles.active : ""
          }`}
          onClick={() => setCurrent(e)}
        >
          {e}
        </div>
      ))}
    </div>
  );
};

export default Hero;
