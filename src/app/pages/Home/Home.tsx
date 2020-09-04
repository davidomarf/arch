import React from "react";
import Hero from "./Hero";
import styles from "./Home.module.scss";

import paramourImg from "../../assets/img/home/image-hero-paramour.jpg";
import seraphImg from "../../assets/img/home/image-hero-seraph.jpg";
import federalImg from "../../assets/img/home/image-hero-federal.jpg";
import trinityImg from "../../assets/img/home/image-hero-trinity.jpg";

const Home = () => (
  <section className={styles.container}>
    <Hero
      items={[
        {
          info: {
            title: "Project Paramour",
            description:
              "Project made for an art museum near Southwest London. Project Paramour is a " +
              "statement of bold, modern architecture."
          },
          image: paramourImg
        },
        {
          info: {
            title: "Seraph Station",
            description:
              "The Seraph Station project challenged us to design a unique station that would " +
              "transport people through time. The result is a fresh and futuristic model " +
              "inspired by space stations."
          },
          image: seraphImg
        },
        {
          info: {
            title: "Federal II Tower",
            description:
              "A sequel theme project for a tower originally built in the 1800s. We achieved " +
              "this with a striking look of brutal minimalism with modern touches."
          },
          image: federalImg
        },
        {
          info: {
            title: "Trinity Bank Tower",
            description:
              "Trinity Bank challenged us to make a concept for a 84 story building located in " +
              "the middle of a city with a high earthquake frequency. For this project we used " +
              "curves to blend design and stability to meet our objectives."
          },
          image: trinityImg
        }
      ]}
    />
  </section>
);

export default Home;
