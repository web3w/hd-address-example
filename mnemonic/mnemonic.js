'use strict';
const hdAddress = require("hd-address")
let hdIndex = 6677
const myselfMnemonic = "star star"
let hd = hdAddress.HD(myselfMnemonic)


let getRandomMnemonic = ()=>{
    let mnemo = hd.wallet.getRandomMnemonic()
    console.log(mnemo)
    let isMnemo = hd.wallet.validateMnemonic(mnemo)
    console.log(isMnemo)
}

let getChineseMnemonic = ()=>{
    let wordList = hd.wallet.wordlists.zh
    let strength = hd.wallet.strength.low
    let mnemo = hd.wallet.getRandomMnemonic(strength, wordList)
    console.log(mnemo)
    let isMnemo = hd.wallet.validateMnemonic(mnemo, wordList)
    console.log(isMnemo)
}

console.log("----------getRandomMnemonic----------")
getRandomMnemonic()
console.log("----------getChineseMnemonic----------")
getChineseMnemonic()

