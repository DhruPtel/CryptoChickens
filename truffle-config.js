require('babel-register');
require('babel-polyfill');
require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    mainnet: {
      networkCheckTimeout: 10000,
      provider: function() {
        return new HDWalletProvider(
          proccess.env.PRIVATE_KEY_LIVE,
          `https://mainnet.infura.io/v3/${process.env.INFURA_API_LIVE}`
        )
      },
      gas: 5000000,
      gasPrice: 78000000000,
      confirmations: 2,
      network_id: 1
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
