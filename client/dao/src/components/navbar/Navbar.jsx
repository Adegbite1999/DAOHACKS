import React from "react";
import Styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={Styles.root}>
      <div className={Styles.logo}>
        <h1>
          <span className={Styles.invest}>investif</span>
          <span>y</span>
        </h1>
      </div>

      <ul className={Styles.items}>
        <li>View our pool</li>
        <li>Connect wallet</li>
      </ul>
    </nav>
  );
};

export default Navbar;
