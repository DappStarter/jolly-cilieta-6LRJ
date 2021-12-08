require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture stomach regret random coach inner another army gas'; 
let testAccounts = [
"0x88128584092f37a193d08cb5874a896aa35e6b57ddb1804913198687837e7ce7",
"0x6ae0a5f9756dfd101a115f277b2b80201be002bed9dffd192a6471c2f810ef10",
"0x892cd5fceddd7cdc00af22d664fdce819dcdde40b275f1ee565303b0cb0b40e6",
"0x4a5c366a5d6a964004e0399b6b1d600fed6bf69807761ff3c8542c2e2993e849",
"0xc6f6603fcaa55ada669937752fb239d3c2194a5e60653a1f47b95c4bd2e76991",
"0x05960cc0a9aa41df262bc25628fdd0f93411aab71db1e595c00d198c1e2c7fb7",
"0xf27dd4f3c60822472706e04b6bbd61622a6d69c4d37b3c30d2d59e59f79e258b",
"0x5be204bc68638a43438460a9c4db329573e445960ff78844ea30180a6a6c7b21",
"0x71f8379be1cc3ed3acacfc8f234ffb582b1700b8a614b07632c2b219bb695d8c",
"0xd7bf1e6958273e989c08acfed654f9e4bfecb684ad0fdaea6f6bcbaaa991d6dd"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


