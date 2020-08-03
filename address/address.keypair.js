let hdData = require("../utils/data").hd
let addrValid = require("../utils/address.valid")
let hdIndex = hdData.index
const mnemonic = hdData.mnemonic
let hdAddress = require("hd-address").HD(mnemonic)


let getCoinAddressKeyPair = async (coinSymbol) => {
    let chain = hdAddress[coinSymbol]
    let {address, path, pri, pub} = await chain.getCoinAddressKeyPair(hdIndex)
    console.log(address, path)
    let validAddress = addrValid(coinSymbol, address)
    console.assert(validAddress, `address invalid : ${coinSymbol}  ${address}`)
    console.assert(address == hdData[coinSymbol], `KeyPai address is diff: ${coinSymbol}   ${address}`)

    let priAddr = await chain.getAddressByPrivateKey(pri)
    console.assert(priAddr.address == hdData[coinSymbol], `ByPrivateKey address is diff: ${coinSymbol}   ${priAddr.address}`)

    let pubAddr = await chain.getAddressByPublicKey(pub)
    console.assert(pubAddr.address == hdData[coinSymbol], `ByPublicKey address is diff: ${coinSymbol}   ${address}`)
}

getCoinAddressKeyPair("BTC")
