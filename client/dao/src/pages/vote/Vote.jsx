import React from "react";
import Layout from "../../components/layout/Layout";
import Styles from "./Vote.module.css";
import { ethers, Contract } from "ethers";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
// const investifyAddress = "0x169E82570feAc981780F3C48Ee9f05CED1328e1b";
// import investifyAbi from "./utils/web3/abi.json";

const Vote = () => {
  //   const onClickAccept = async () => {
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const signer = provider.getSigner();
  //     const InvestifyContractInstance = new Contract(
  //       investifyAddress,
  //       investifyAbi,
  //       signer
  //     );
  //     const stakeTx = await InvestifyContractInstance.withdraw(weiValue);
  //     await stakeTx.wait();

  //     // const address = response.events[1].args[0];
  //     // const amountUnstaked = response.events[1].args[1].toString();
  //     if(success){
  //       return  toast.success("Accept successful");
  //     } else{
  //         return toast.error("Accept failed");
  //     }
  //   };

  //    const onClickReject = async () => {
  //      const provider = new ethers.providers.Web3Provider(window.ethereum);
  //      const signer = provider.getSigner();
  //      const InvestifyContractInstance = new Contract(
  //        investifyAddress,
  //        investifyAbi,
  //        signer
  //      );
  //      const stakeTx = await InvestifyContractInstance.withdraw(weiValue);
  //      await stakeTx.wait();

  //      // const address = response.events[1].args[0];
  //      // const amountUnstaked = response.events[1].args[1].toString();
  //      if (success) {
  //        return toast.success("Reject successful");
  //      } else {
  //        return toast.error("Reject failed");
  //      }
  //    };
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
            <div
              className={Styles.buttonStyle}
              onClick={() => {
                // onClickAccept();
              }}
            >
              <p className={Styles.buttonText}>Accept</p>
            </div>
            <div
              className={Styles.buttonStyleOne}
              onClick={() => {
                // onClickReject();
              }}
            >
              <p className={Styles.buttonText}>Reject</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Vote;
