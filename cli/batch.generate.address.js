const HDWallet = require('hd-address-cli')


console.log("----------- default -------------")
let option = {mnemonic: "aa", coin: "BTC",columns: "pri,path"}
let foo = HDWallet.cli.generateAddress(option)
console.log(foo)

console.log("----------- index -------------")
let option1 = {mnemonic: "aa", coin: "BTC", columns: "pri,path", index: 4, hdpath: "m/20'/0/"}
let foo1 = HDWallet.cli.generateAddress(option1)
console.log(foo1)


console.log("----------- range -------------")
let option2 = {mnemonic: "aa", coin: "ETH", columns: "pri,path",range:"4-10", hdpath: "m/20'/0/"}
let foo2 = HDWallet.cli.generateAddress(option2)
console.log(foo2)


