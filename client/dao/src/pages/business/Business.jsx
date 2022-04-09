import React from "react";
import Styles from "./Business.module.css";
import Layout from "../../components/layout/Layout";
import { BsCloudUpload } from "react-icons/bs";

const Business = () => {
  return (
    <Layout>
      <div className={Styles.root}>
        <div className={Styles.description}>
          <h1>Business Funding</h1>
          <p>
            Invesify allows businesses the opportunity to apply for funding, the
            carefully vetted DAO gets to scrutinize business proposals and pitch
            before accepting them into the pool for them to generate funds, this
            breaks the barrier and lets any business no matter what scale to
            secure funds.
          </p>
          <p>- Read the terms and conditions</p>
        </div>

        <div className={Styles.upload}>
          <BsCloudUpload size={50} />
          <p>Upload your documents </p>
          <p>
            Make sure all document uploaded are authentic and verified ,
            admission into the funding pool would depend on the authenticity of
            this documents and other relevant links and business projections .
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Business;
