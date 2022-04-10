import React from "react";
import Styles from "./Business-info.module.css";

const BusinessInfo = () => {
  const data = [
    {
      name: "Brink Agro-Finance",
      target: "$4,000,000",
      raised: "$25000",
      more: "...",
    },
    {
      name: "Brink Agro-Finance",
      target: "$4,000,000",
      raised: "$25000",
      more: "...",
    },
    {
      name: "Brink Agro-Finance",
      target: "$4,000,000",
      raised: "$25000",
      more: "...",
    },
    {
      name: "Brink Agro-Finance",
      target: "$4,000,000",
      raised: "$25000",
      more: "...",
    },
  ];

  return (
    <div className={Styles.root}>
      <div className={Styles.container}>
        <div className={Styles.topic}>
          <div className={Styles.fractionOne}>
            <p className={Styles.topicText}>Business Name</p>
          </div>
          <div className={Styles.fractionTwo}>
            <p className={Styles.topicText}>Target Money</p>
          </div>
          <div className={Styles.fractionTwo}>
            <p className={Styles.topicText}>Total Money Raised</p>
          </div>
          <div className={Styles.fractionThree}>
            <p className={Styles.topicText}>More</p>
          </div>
        </div>
        {data.map((item, index) => {
          return (
            <div
              key={item.name}
              className={Styles.subtopic}
              style={{ backgroundColor: `${index % 2 === 0 ? "#DEE3F2" : ""}` }}
            >
              <div className={Styles.fractionOne}>
                <p className={Styles.text}>{item.name}</p>
              </div>
              <div className={Styles.fractionTwo}>
                <p className={Styles.text}>{item.target}</p>
              </div>
              <div className={Styles.fractionTwo}>
                <p className={Styles.text}>{item.raised}</p>
              </div>
              <div className={Styles.fractionThree}>
                <p className={Styles.text}>{item.more}</p>
              </div>
            </div>
          );
        })}
        <div className={Styles.next}>
          <p className={Styles.nextText}>Next</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessInfo;
