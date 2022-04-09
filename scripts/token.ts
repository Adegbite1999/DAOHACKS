import { ethers } from "hardhat";

async function Token() {
  // We get the contract to deploy
  const Token = await ethers.getContractFactory("Investify");
  const token = await Token.deploy("Investify", "IVY");

  await token.deployed();

  console.log("Token deployed to:", token.address);

  await sleep(100000);

  // Verify the contract after deploying
  //@ts-ignore
  await hre.run("verify:verify", {
    address: token.address,
    constructorArguments: ["Investify", "IVY"],
  });
}
function sleep(ms: any) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
Token().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
