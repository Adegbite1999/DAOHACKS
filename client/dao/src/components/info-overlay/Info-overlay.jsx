import React from "react";
import Layout from "../../components/layout/Layout";
import Styles from "./Info-overlay.module.css";
import { BackArrow } from "./back-arrow";

const InfoOverlay = ({
  name,
  address,
  investInput,
  onChangeInput,
  onClickInvest,
  setShow,
}) => {
  return (
    <Layout>
      <div className={Styles.root}>
        <div className={Styles.container}>
          <div className={Styles.details}>
            <div style={{ cursor: "pointer" }} onClick={() => setShow(false)}>
              <BackArrow width="50px" height="32px" />
            </div>
            <div className={Styles.topicContainer}>
              <p className={Styles.topic}>{name}</p>
              <p className={Styles.address}>{address}</p>
            </div>
            <p className={Styles.overview}>Overview</p>
            <p className={Styles.description}>
              An agro fintech solution that aims to bridge the loop holes
              transportation posts on agricultural development using IOT and
              other blockchain technologies
            </p>
            <div className={Styles.buttonContainer}>
              <input
                type="number"
                placeholder="Amount to Invest"
                className={Styles.input}
                value={investInput}
                onChange={onChangeInput}
                id="invest"
              />
            </div>
            <div className={Styles.buttonContainer}>
              <div
                className={Styles.buttonStyle}
                onClick={(e) => {
                  e.preventDefault();
                  onClickInvest(address);
                }}
              >
                <p className={Styles.buttonText}>Invest</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InfoOverlay;
