// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const {ethers} = require("hardhat");
const { CRYPTODEVS_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {

  const FakeNFTMarketplace = await ethers.getContractFactory("FakeNFTMarketplace");

  const fakeNftMarketplace = await FakeNFTMarketplace.deploy();
  console.log(`FakeNFTMarketplace deployed to: ${fakeNftMarketplace.address}`);

  const CryptoDevsDAO = await ethers.getContractFactory("CryptoDevsDAO");
  const cryptoDevsdao = await CryptoDevsDAO.deploy(
    fakeNftMarketplace.address,
    CRYPTODEVS_NFT_CONTRACT_ADDRESS,
    {
        value: ethers.utils.parseEther("0.01"),
    }
  );

  await cryptoDevsdao.deployed();

  console.log(`CryptoDEVsDA) deployed to: ${cryptoDevsdao.address}`);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
