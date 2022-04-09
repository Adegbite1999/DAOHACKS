import React from "react";
import Styles from "./Card.module.css";
import Card from "./Card";
import money from "../../assets/money.svg";
import Glossy from "../../assets/Glossy.svg";
import las from "../../assets/las.svg";
import others from "../../assets/others.svg";

const BodyContents = () => {
  const data = [
    {
      header: "Business Funding",
      content:
        "Invesify allows businesses the opportunity to apply for funding, the carefully vetted DAO gets to scrutinize business proposals and pitch before accepting them into the pool for them to generate funds, this breaks the barrier and lets any business no matter what scale to secure funds.",
      img: money,
    },
    {
      header: "Investment Security & Variety",
      content:
        "Investors on investify can apply to fund any business of their choice from the pool at any point in time, investors can invest money at any time and either get a percentage return or equity, in accordance to how the businesses wants it. The DAO also provides security in funds for investors inorder to limit losses.",
      img: Glossy,
    },
    {
      header: "Transparency & Accountability",
      content:
        "The carefully vetted DAO are saddled with the responsibility of making the right decision and are also reliable the financial flow is open for all investors to query. The money contributed by invevestors are not released once but would rather be broken down into bits in order to ensure all terms and conditions are followed through and also to monitor operations and minimize loss.",
      img: others,
    },
    {
      header: "Open Sourced",
      content:
        "Everything about us is open sourced, we believe in the power of decentralization. All decison made by the DAO would be backed with a thorough defence as to why such decision is made and there is no central authority.",
      img: las,
    },
  ];

  return (
    <Card>
      {data.map((item) => {
        return (
          <div key={item.header} className={Styles.container}>
            <div className={Styles.content}>
              <div className={Styles.desc}>
                <h2>{item.header}</h2>
                <p>{item.content}</p>
              </div>
              <img
                src={item.img}
                alt={item.header}
                className={Styles.imgCont}
              />
            </div>
          </div>
        );
      })}
    </Card>
  );
};

export default BodyContents;
