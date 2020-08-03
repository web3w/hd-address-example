'use strict';
const hdAddress = require("hd-address")
let hdIndex = 6677
const mnemonic = hdAddress.mnemonic.getRandomMnemonic()
let hd = hdAddress.HD(mnemonic,hdAddress.keyType.mnemonic,"star")

let examplePwd =  () => {
    let addr =  hd.BTC.getAddress(hdIndex)
    console.log("BTC",addr.address)
    addr =  hd.BTC_TEST.getAddress(hdIndex)
    console.log("BTC_TEST",addr.address)
    addr =  hd.BCH.getAddress(hdIndex)
    console.log("BCH",addr.address)
    addr =  hd.BCH_TEST.getAddress(hdIndex)
    console.log("BCH_TEST",addr.address)
    addr =  hd.LTC.getAddress(hdIndex)
    console.log("LTC",addr.address)
    addr =  hd.LTC_TEST.getAddress(hdIndex)
    console.log("LTC_TEST",addr.address)
    addr =  hd.ETH.getAddress(hdIndex)
    console.log("ETH",addr.address)
    addr =  hd.TRX.getAddress(hdIndex)
    console.log("TRX",addr.address)
}


console.log("----------mnemonic + passward -> address----------")
examplePwd()

