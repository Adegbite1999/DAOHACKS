import React from "react";
import Styles from "./Business-info.module.css";
import { ethers, utils, Contract } from "ethers";
import InfoOverlay from "../../components/info-overlay/Info-overlay";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import ReactPaginate from "react-paginate";
// const investifyAddress = "0x169E82570feAc981780F3C48Ee9f05CED1328e1b";
// import investifyAbi from "./utils/web3/abi.json";

const BusinessInfo = () => {
  // const [businessesHistory, setBusinessesHistory] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const [investInput, setInvestorInput] = React.useState("");
  const [currentItems, setCurrentItems] = React.useState(null);
  const [pageCount, setPageCount] = React.useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = React.useState(0);

  //   const init = async () => {
  //     const customProvider = new ethers.providers.JsonRpcProvider(
  //       process.env.REACT_APP_RPC_URL
  //     );
  //     const BRTContractInstance = new Contract(
  //       investifyAddress,
  //       investifyAbi,
  //       customProvider
  //     );
  //     const businesses = await BRTContractInstance.queryFilter(
  //       "stakeEvent"
  //     );

  //     const history = [];

  //     businesses.forEach((data) => {
  //       history.unshift({
  //         name: data.args[1],
  //         target: data.args[1],
  //         raised: data.args[1],
  //         businessAddress: data.args[1],
  //       });
  //     });

  //     setBusinessesHistory(history);

  //     BRTContractInstance.on("stakeEvent", (account, amount, time, type) => {
  //       const newBusiness = {
  //         amount: amount,
  //         account: account,
  //         time: time.toString(),
  //         type: type,
  //       };

  //       setBusinessesHistory((prev) => [newBusiness, ...prev]);
  //     });
  //   };

  const onChangeInput = ({ target }) => {
    switch (target.id) {
      case "invest":
        setInvestorInput(target.value);
        break;

      default:
        break;
    }
  };

  // A function that handles Investment
  const onClickInvest = async (address) => {
    console.log(address);
    if (investInput <= 0)
      return toast.error("you cannot stake less than or equal to 0 tokens");
    setShow(false);
    toast.success("Investment successful");
    setInvestorInput(0);
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const signer = provider.getSigner();
    // const BRTContractInstance = new Contract(
    //   BRTTokenAddress,
    //   BRTTokenAbi,
    //   signer
    // );
    // const weiValue = utils.parseEther(stakeInput);
    // const investTx = await BRTContractInstance.stakeBRT(weiValue);

    // await investTx.wait();

    // const address = response.events[1].args[0];
    // const amountStaked = response.events[1].args[1].toString();
  };

  const data = [
    {
      name: "Brink Agro-Finance",
      target: "$4,000,000",
      raised: "$25000",
      more: "...",
      address: "0xef456u5t4uy4i4333323341",
    },
    {
      name: "Brink Agro-Finance",
      target: "$4,000,000",
      raised: "$25000",
      more: "...",
      address: "0xef456u5t4uy4i4333323342",
    },
    {
      name: "Brink Agro-Finance",
      target: "$4,000,000",
      raised: "$25000",
      more: "...",
      address: "0xef456u5t4uy4i4333323343",
    },
    {
      name: "Brink Agro-Finance",
      target: "$4,000,000",
      raised: "$25000",
      more: "...",
      address: "0xef456u5t4uy4i4333323344",
    },
  ];
  const itemsPerPage = 3;
  React.useEffect(() => {
    const data = [
      {
        name: "Brink Agro-Finance",
        target: "$4,000,000",
        raised: "$25000",
        more: "...",
        address: "0xef456u5t4uy4i4333323341",
      },
      {
        name: "Brink Agro-Finance",
        target: "$4,000,000",
        raised: "$25000",
        more: "...",
        address: "0xef456u5t4uy4i4333323342",
      },
      {
        name: "Brink Agro-Finance",
        target: "$4,000,000",
        raised: "$25000",
        more: "...",
        address: "0xef456u5t4uy4i4333323343",
      },
      {
        name: "Brink Agro-Finance",
        target: "$4,000,000",
        raised: "$25000",
        more: "...",
        address: "0xef456u5t4uy4i4333323344",
      },
    ];
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

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
        {currentItems &&
          currentItems.map((item, index) => {
            return (
              <div
                key={item.address}
                className={Styles.subtopic}
                style={{
                  backgroundColor: `${index % 2 === 0 ? "#DEE3F2" : ""}`,
                }}
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
                  <div
                    className={Styles.moreButton}
                    onClick={() => setShow(true)}
                  >
                    <p className={Styles.text} style={{ cursor: "pointer" }}>
                      ...
                    </p>
                  </div>
                </div>
                {show && (
                  <div className={Styles.Overlay}>
                    <InfoOverlay
                      name={item.name}
                      address={item.address}
                      investInput={investInput}
                      onChangeInput={onChangeInput}
                      onClickInvest={onClickInvest}
                      setShow={setShow}
                    />
                  </div>
                )}
              </div>
            );
          })}
        <ReactPaginate
          className={Styles.next}
          breakLabel="..."
          nextLabel={<p className={Styles.nextText}>Next</p>}
          onPageChange={handlePageClick}
          pageRangeDisplayed={0}
          pageCount={pageCount}
          disabledClassName={Styles.disabled}
          pageLinkClassName={Styles.pageLink}
          previousLabel={<p className={Styles.previousText}>Previous</p>}
          renderOnZeroPageCount={null}
          pageClassName={Styles.page}
        />
      </div>
    </div>
  );
};

export default BusinessInfo;
