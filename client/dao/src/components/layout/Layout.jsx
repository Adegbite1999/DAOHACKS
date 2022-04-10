import React,{useState} from "react";
import Navbar from "../navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
  const [connected, setConnected] = useState(false);

  const connectWallet = async () => {
    if (!!window.ethereum || !!window.web3) {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      toast.success('wallet connected')
      setConnected(true)
    } else {
      toast.error("please use an etherum enabled browser")
      setConnected(false)
    }
  };

  return (
    <div>
      <ToastContainer/>
      <Navbar  
      connected={connected}
      connectWallet={connectWallet}
      />
      {children}
    </div>
  );
};

export default Layout;
