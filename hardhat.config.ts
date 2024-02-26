import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const {
  YOUR_ALCHEMY_MAINNET_API_URL,
  YOUR_ALCHEMY_SEPOLIA_API_URL,
  YOUR_METAMASK_ACCOUNT_PRIVATE_KEY
} = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  gasReporter: {
    gasPrice: 10000000000,
  },
  networks: {
    hardhat: {
      forking: {
        url: "https://polygon-mainnet.g.alchemy.com/v2/fULkDsr70a764YFKq7eq2InurjUKUdRB",
      },
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/XpWuAVYcHj7J0KOpMrd-c8Zr1Tdd0YJ5",
      accounts: ["8b2e54997c83fe1a298fc5b2978448a6f2b4b03ef30942279af3333e137b421c"],
    },
  },
};

export default config;