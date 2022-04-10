import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Styles from "./Navbar.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const [connected, setConnected] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!window.ethereum) return;
    // binding handlers to wallet events we care about
    window.ethereum.on("connect", eagerConnect);
    window.ethereum.on("accountsChanged", handleAccountChanged);
    window.ethereum.on("chainChanged", handleChainChanged);
  }, []);

  // handler for when user switch from one account to another or completely disconnected
  const handleAccountChanged = async (accounts) => {
    if (!!accounts.length) {
      const networkId = await window.ethereum.request({
        method: "eth_chainId",
      });
      if (Number(networkId) !== 42) return;
      const accountDetails = await getAccountDetails(accounts[0]);

      setUserInfo(accounts[0]);
      setConnected(true);
    } else {
      setConnected(false);
      setUser(null);
    }
  };

  // handler for handling chain/network changed
  const handleChainChanged = async (chainid) => {
    if (Number(chainid) !== 42) {
      setConnected(false);
      setUser(null);

      return toast.err(
        "You are connected to the wrong network, please switch to polygon mumbai"
      );
    } else {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.listAccounts();
      if (!accounts.length) return;
      const accountDetails = await getAccountDetails(accounts[0]);
      setUser(accounts[0]);
      setConnected(true);
    }
  };

  // an handler to eagerly connect user and fetch their data
  const eagerConnect = async () => {
    const networkId = await window.ethereum.request({ method: "eth_chainId" });
    if (Number(networkId) !== 42) return;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.listAccounts();
    if (!accounts.length) return;
    const accountDetails = await getAccountDetails(accounts[0]);
    setUser(accounts[0]);
    setConnected(true);
  };

  // On click for wallet connection.
  const connectWallet = async () => {
    if (!!window.ethereum || !!window.web3) {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      toast.success("wallet connected successfully");
    } else {
      toast.error("please use an etherum enabled browser");
    }
  };
  return (
    <nav className={Styles.root}>
      <div className={Styles.logo}>
        <ToastContainer />
        <Link to="/">
          <h1>
            <span className={Styles.invest}>investif</span>
            <span>y</span>
          </h1>
        </Link>
      </div>

      <ul className={Styles.items}>
        <li>View our pool</li>
        <li onClick={connectWallet}>Connect wallet</li>
      </ul>
    </nav>
  );
};

export default Navbar;
