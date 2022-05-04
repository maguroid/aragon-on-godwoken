const { ethers } = require("hardhat");

async function main() {
  try {
    const [deployer] = await ethers.getSigners();
    console.log("deploying contract with the account:", deployer.address);

    const balance = (await deployer.getBalance()).toString();
    console.log("account balance:", balance);

    const factory = await ethers.getContractFactory("ENSFactory");

    const ENSFactory = await factory.deploy();

    const tx = await ENSFactory.newENS(deployer.address);
    const receipt = await tx.wait();

    console.log("ENS deployed to", receipt.to);
    process.exit(0);
  } catch (e) {
    console.error("ENS deployment failed: ", e.message);
    process.exit(1);
  }
}

main();
