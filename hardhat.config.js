require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

const homedir = require("os").homedir;
const path = require("path");
const key = require(path.join(homedir(), ".aragon/godwoken_testnet_key.json"));

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "godwoken_testnet",
  networks: {
    hardhat: {},
    godwoken_testnet: {
      url: key.rpc,
      accounts: key.keys,
    },
  },
  solidity: {
    version: "0.4.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 40000,
  },
};
