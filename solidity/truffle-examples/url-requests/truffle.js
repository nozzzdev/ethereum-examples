const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = "trend change swap liberty orange timber mirror dose upset pencil hurry ghost";

module.exports = {
  networks: {
    mainnet: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://sparkling-black-cherry.xdai.quiknode.pro/7a66848e1f9767ca8763cbe38b2c7c8710f701f9/")
      },
      gas: 5000000,
      gasPrice: 5e9,
      network_id: 1
    },
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*",
      websockets: true
    }
  }
};
  
  compilers: {
    solc: {
      version: "0.5.0",
      settings; {
        optimizer: {
          enabled: true,
          runs; 200
        }
      }
    }
  }

