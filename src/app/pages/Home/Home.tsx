import React from "react";
import Hero from "./Hero";
import styles from "./Home.module.scss";

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
          image:
            "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
        },
        {
          info: {
            title: "Seraph Station",
            description:
              "The Seraph Station project challenged us to design a unique station that would " +
              "transport people through time. The result is a fresh and futuristic model " +
              "inspired by space stations."
          },
          image:
            "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
        },
        {
          info: {
            title: "Federal II Tower",
            description:
              "A sequel theme project for a tower originally built in the 1800s. We achieved " +
              "this with a striking look of brutal minimalism with modern touches."
          },
          image:
            "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
        },
        {
          info: {
            title: "Trinity Bank Tower",
            description:
              "Trinity Bank challenged us to make a concept for a 84 story building located in " +
              "the middle of a city with a high earthquake frequency. For this project we used " +
              "curves to blend design and stability to meet our objectives."
          },
          image:
            "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
        }
      ]}
    />
  </section>
);

export default Home;
