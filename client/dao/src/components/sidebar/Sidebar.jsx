import React from "react";
import Styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={Styles.root}>
      <div>Dashboard</div>
      <div>Analysis</div>
      <div>My Investments</div>
    </div>
  );
};

export default Sidebar;
