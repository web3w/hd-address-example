'use strict';
const hdAddress = require("hd-address")

let hdIndex = 6677
let mnemonic = hdAddress.mnemonic.getRandomMnemonic()
let hd = hdAddress.HD(mnemonic)


let getPublicKeyByChainCode = () => {
    let hdPath = "m/44'/0'/1'"
    let {pub, chainCode} = hd.wallet.getChainCodeByPath(hdPath)
    console.log(hdPath, "chainCode", chainCode.toString("hex"),"\n")

    // pubKey + chainCode +childPath =>  address
    let childPath = "m/1/" + hdIndex
    let child = hd.wallet.getPublicKeyByChainCode(pub, chainCode, childPath)
    let childAaddr = hd.BTC.getAddressByPublicKey(child.pub)
    console.log(childPath, child.pub.toString("hex"),"BTC Address",childAaddr.address)

    //path =>  address
    let testPath = "m/44'/0'/1'/1/" + hdIndex
    let test = hd.wallet.getChainCodeByPath(testPath)
    let testAaddr = hd.BTC.getAddressByPublicKey(test.pub)
    console.log(testPath, test.pub.toString("hex"),"BTC Address",testAaddr.address)
}

let getPrivateKeyByChainCode = () => {
    let hdPath = "m/44'/0'/1'"
    let {pri, chainCode} = hd.wallet.getChainCodeByPath(hdPath)
    console.log(hdPath, "chainCode", chainCode.toString("hex"))

    // pubKey + chainCode +childPath =>  address
    let childPath = "m/1/" + hdIndex
    let child = hd.wallet.getPrivateKeyByChainCode(pri, chainCode, childPath)
    console.log(childPath, child.pub.toString("hex"))
    console.log("privite", childPath, child.pri.toString("hex"))

    //path =>  address
    let testPath = "m/44'/0'/1'/1/" + hdIndex
    let test = hd.wallet.getChainCodeByPath(testPath)
    console.log(testPath, test.pub.toString("hex"))
    console.log("privite", testPath, test.pri.toString("hex"))
}

console.log("----------- getPublicKeyByChainCode ------------")
getPublicKeyByChainCode()
// console.log("----------- getPrivateKeyByChainCode ------------")
// getPrivateKeyByChainCode()
