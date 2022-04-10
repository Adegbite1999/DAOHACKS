import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Footer.module.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={Styles.root}>
      <div className={Styles.right}>
        <p>Copyright &copy; 2022</p>
        <div className={Styles.logo}>
          <Link to="/">
            <h1 onClick={scrollToTop}>
              <span className={Styles.invest}>investif</span>
              <span>y</span>
            </h1>
          </Link>
        </div>
      </div>

      <ul className={Styles.others}>
        <li>Terms & conditions</li>
        <li>Contact us</li>
        <li>Blog</li>
      </ul>
    </div>
  );
};

export default Footer;
