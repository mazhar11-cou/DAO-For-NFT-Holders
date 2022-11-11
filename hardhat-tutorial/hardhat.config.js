require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const RPC_URL = process.env.RPC_URL;

const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: RPC_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};