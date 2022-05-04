const { ethers } = require("hardhat");
const namehash = require("eth-ens-namehash").hash;
const ensAddr = process.env.ENS_ADDRESS;
const node = namehash("aragonid.eth");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("deploying AragonID with ENS:", ensAddr);
  const balance = await deployer.getBalance();
  console.log(`balance of ${deployer.address}: ${balance}`);

  const FIFSResolvingRegistrar = await ethers.getContractFactory(
    "FIFSResolvingRegistrar"
  );
  const ens = await ethers.getContractAt("AbstractENS", ensAddr);

  const publicResolver = await eth.resolver(namehash("resolver.eth"));

  const aragonID = await FIFSResolvingRegistrar.deploy(
    ensAddr,
    publicResolver,
    node
  );
  console.log("AragonID deployed to:", aragonID.address);
}
main();
