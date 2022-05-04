const { ethers } = require("hardhat");

const ZERO_ADDR = "0x0000000000000000000000000000000000000000";

async function main() {
  try {
    const ACL = await ethers.getContractFactory("ACL");
    const Kernel = await ethers.getContractFactory("Kernel");
    const DAOFactory = await ethers.getContractFactory("DAOFactory");

    const kernelBase = await Kernel.deploy(true);
    const aclBase = await ACL.deploy();

    const daoFactory = await DAOFactory.deploy(
      kernelBase.address,
      aclBase.address,
      ZERO_ADDR
    );
    console.log("DAOFactory deployed to: ", daoFactory.address);
  } catch (e) {
    console.error("DAOFactory deployment failed: ", e.message);
  }
}
main();
