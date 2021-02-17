require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift rescue night equip include bean orange success'; 
let testAccounts = [
"0xa368bccb79a6491853937f8207b9e6c97a770c7a355f92251be227e68e67313b",
"0xfc6864560b0b13f5f0a0738ab332747a635f34365a022c2b4feb6bc0ea6004a4",
"0xe5d91dae79ff13ed12345539aa34afd2b75e95bd3919bb166b75be4a479cacb5",
"0x62bd2b8412e2451226efa71af654626ca7904c83ecaa087d72f4b38839829b06",
"0x4c741f2633bad7edd229b3bf002dd972a01321516ced09d24aa0d77cffbddbca",
"0x292109d5d82a4b42e77033ac12769f319f7e46d172be70e839dff16516886823",
"0x52d7477a6d27c44dda6954c6aa821e153e7b13e273825fee049c646c0f707ebe",
"0x94d8a41be82b89d8ed05b0e54ac693d45070e16c59cd2112fe772c7e43dcdf54",
"0x0867830f047d5d7db0a25bca0e42dd70c06b31821720cd0aa8a48f70e6f6c96e",
"0x747e74ba3611bdb4a2806cf40f42eba271ddf95d9e944466e32c9432b8e43354"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
