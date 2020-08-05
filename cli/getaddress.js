const HDWallet = require('hd-address-cli')

const mnemonic = 'tag volcano eight thank tide danger coast health above argue embrace heavy'
const hdwallet = HDWallet.fromMnemonic(mnemonic,"ETH")

// -------Deriving keys at a HD path:------------
// 0xC49926C4124cEe1cbA0Ea94Ea31a6c12318df947
console.log(hdwallet.derive(`m/0'/0/0`).getAddress())
//026005c86a6718f66221713a77073c41291cc3abbfcd03aa4955e9b2b50dbf7f9b // compression public key
console.log(hdwallet.derive(`m/0'/0/0`).getPublicKey())
//63e21d10fd50155dbba0e7d3f7431a400b84b4c2ac1ee38872f82448fe3ecfb9
console.log(hdwallet.derive(`m/0'/0/0`).getPrivateKey())
console.log(hdwallet.derive(`m/0'/0/0`).hdpath())

//-------Deriving wallets given account index:---------
let hd = hdwallet.derive(`m/0'/0`)
console.log(hd.derive(1).getAddress()) // 0x8230645aC28A4EdD1b0B53E7Cd8019744E9dD559
console.log(hd.derive(2).getAddress()) // 0x65c150B7eF3B1adbB9cB2b8041C892b15eDde05A
console.log(hd.derive(2).hdpath())
