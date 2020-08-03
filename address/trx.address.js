let hdAddress = require("hd-address")

let example = () => {
    let mnemonic = hdAddress.mnemonic.getRandomMnemonic()
    let hd = hdAddress.HD(mnemonic, hdAddress.keyType.mnemonic) //v3.0
    let {pri, address, pub} = hd.TRX.getCoinAddressKeyPair(1)
    console.log(address)
    //private key to address
    let priAddr = hd.TRX.getAddressByPrivateKey(pri)
    console.assert(priAddr.address == address)

    // public key to address
    let pubAddr = hd.TRX.getAddressByPublicKey(pub)
    console.assert(pubAddr.address == address)
}
example()