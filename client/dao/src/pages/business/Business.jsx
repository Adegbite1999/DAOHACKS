import React, { useState } from "react";
import Styles from "./Business.module.css";
import Layout from "../../components/layout/Layout";
import { BsCloudUpload } from "react-icons/bs";
import { create } from "ipfs-http-client";
import { Web3Storage } from "web3.storage";

const client = create("https://ipfs.infura.io:5001/api/v0");

const Business = () => {
  const [fileUrl, updateFileUrl] = useState("");
  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);
  //-------------------------------------------------------------------

  //----------------------------------------------------------------

  const handleClick = (e) => {
    hiddenFileInput.current.click();
  };

  const handleFile = async (e) => {
    const file = e.target.files[0];
    console.log(file);
    // updateFileUrl(url);

    try {
      // Construct with token and endpoint
      const client = new Web3Storage({ token: process.env.API_TOKEN });

      // Pack files into a CAR and send to web3.storage
      const rootCid = await client.put(file.files); // Promise<CIDString>
      console.log(rootCid);

      // Get info on the Filecoin deals that the CID is stored in
      const info = await client.status(rootCid); // Promise<Status | undefined>
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  };
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
          <input
            type="file"
            onChange={handleFile}
            style={{ display: "none" }}
            ref={hiddenFileInput}
          />
          <BsCloudUpload
            size={50}
            className={Styles.icon}
            onClick={handleClick}
          ></BsCloudUpload>
          <p>Upload your documents </p>
          <p>
            Make sure all document uploaded are authentic and verified ,
            admission into the funding pool would depend on the authenticity of
            this documents and other relevant links and business projections .
          </p>
          <div>{fileUrl && <img src={fileUrl} width="600px" />}</div>
        </div>
      </div>
    </Layout>
  );
};

export default Business;
