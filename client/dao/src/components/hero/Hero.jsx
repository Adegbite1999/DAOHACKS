import React from "react";
import Styles from "./Hero.module.css";
import HeroImage from "../../assets/hero.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={Styles.heroCon}>
      <img src={HeroImage} alt="hero" className={Styles.hero} />

      <div className={Styles.content}>
        <h1>DAO FOR THE PEOPLE</h1>
        <h3>Making the right decision for the people and helping businesses</h3>

        <div className={Styles.btns}>
          <Link to="/business">
            <button>Business Funding</button>
          </Link>
          <Link to="/dashboard">
            <button>Become an investor</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
