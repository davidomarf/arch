import React from "react";
import welcomeImg from "../../assets/img/home/image-welcome.jpg";
import styles from "./Welcome.module.scss";


const Welcome = () =>
  <>
    <div className={styles.image} style={{ backgroundImage: `url(${welcomeImg})` }}>
    </div>
    <h1 className={styles.title}>
      Welcome
    </h1>
    <WelcomeDescription />
  </>



const WelcomeDescription = () =>
  <div className={styles.description}>
    <h3>
      Welcome to Arch Studio
    </h3>
    <p>
      We have a unique network and skillset to help bring your projects to life.
      Our small team of highly skilled individuals combined with our large
      network put us in a strong position to deliver exceptional results.

      <br />
      <br />
      Over the past 10 years, we have worked on all kinds of projects.
      From stations to high-rise buildings, we create spaces that inspire and
      delight.
      <br />
      <br />

      We work closely with our clients so that we understand the intricacies of
      each project. This allows us to work in harmony the surrounding area to
      create truly stunning projects that will stand the test of time.
    </p>
  </div>



export default Welcome;

