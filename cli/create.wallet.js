const HDWallet = require('hd-address-cli')

// mnemonic
const mnemonic = 'tag volcano eight thank tide danger coast health above argue embrace heavy'
const hdwallet = HDWallet.fromMnemonic(mnemonic, "ETH")
console.log(hdwallet.derive(`m/0'/0/0`).getAddress()) // 0xC49926C4124cEe1cbA0Ea94Ea31a6c12318df947

// seed
const seed = Buffer.from('efea201152e37883bdabf10b28fdac9c146f80d2e161a544a7079d2ecc4e65948a0d74e47e924f26bf35aaee72b24eb210386bcb1deda70ded202a2b7d1a8c2e', 'hex')
const ethSeedSWallet = HDWallet.fromSeed(seed, "ETH")
console.log(ethSeedSWallet.derive(`m/0'/0/1`).getAddress()) // 0x8230645aC28A4EdD1b0B53E7Cd8019744E9dD559

// base58
const {base58} = HDWallet.cli.generateBase58({})
const ethBase58SWallet = HDWallet.fromBase58(base58, "ETH")
console.log(ethBase58SWallet.derive(`m/0'/0/1`).getAddress())