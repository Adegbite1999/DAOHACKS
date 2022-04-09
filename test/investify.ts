import { expect } from "chai";
import { ethers } from "hardhat";

describe("Investify", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Dao = await ethers.getContractFactory("Investify");
    const dao = await Dao.deploy([
      "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
      "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
      "0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
      "0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB",
    ]);
    await dao.deployed();

    expect(await dao.greet()).to.equal("Hello, world!");

    const setGreetingTx = await dao.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await dao.greet()).to.equal("Hola, mundo!");
  });
});
