import React from "react";
import Styles from "./DashView.module.css";
import Frame from "../../assets/Frame.svg";
import Group from "../../assets/Group.svg";

const DashView = () => {
  return (
    <div className={Styles.root}>
      <img src={Frame} alt="frame" className={Styles.dashImg} />
      <img src={Group} alt="frame" className={Styles.groupImg} />
    </div>
  );
};

export default DashView;
