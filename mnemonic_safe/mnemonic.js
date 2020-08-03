'use strict';
const hdAddress = require("hd-address")

let getRandomMnemonic = () => {
    let mnemo = hdAddress.mnemonic.getRandomMnemonic()
    console.log(mnemo)
    let isMnemo = hdAddress.mnemonic.validateMnemonic(mnemo)
    console.log(isMnemo)
}

let getChineseMnemonic = () => {
    let wordList = hdAddress.mnemonic.wordLists.zh
    let strength = hdAddress.mnemonic.strength.high
    let mnemo = hdAddress.mnemonic.getRandomMnemonic(strength, wordList)
    console.log(mnemo)
    let isMnemo = hdAddress.mnemonic.validateMnemonic(mnemo, wordList)
    console.log(isMnemo)
}

console.log("----------getRandomMnemonic----------")
getRandomMnemonic()
console.log("----------getChineseMnemonic----------")
getChineseMnemonic()

