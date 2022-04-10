import React from "react";
import Layout from "../../components/layout/Layout";
import Styles from "./Vote.module.css";

const Vote = () => {
  return (
    <Layout>
      <div className={Styles.root}>
        <div className={Styles.container}>
          <div className={Styles.details}>
            <div className={Styles.topicContainer}>
              <p className={Styles.topic}>Brink Agro-Finance</p>
              <p className={Styles.address}>0xef456u5t4uy4i433332334</p>
            </div>
            <p className={Styles.overview}>Overview</p>
            <p className={Styles.description}>
              An agro fintech solution that aims to bridge the loop holes
              transportation posts on agricultural development using IOT and
              other blockchain technologies
            </p>
            <div className={Styles.box}>
              <p className={Styles.pitch}>Fetch Pitch Deck</p>
            </div>
          </div>
          <div className={Styles.buttonContainer}>
            <div className={Styles.buttonStyle}>
              <p className={Styles.buttonText}>Accept</p>
            </div>
            <div className={Styles.buttonStyleOne}>
              <p className={Styles.buttonText}>Reject</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Vote;
