# hd-address-example
[![NPM version](https://img.shields.io/npm/v/hd-address?style=flat-square)](https://www.npmjs.com/package/hd-address)

An example of hd Wallet

### Getting started
### Reference 
[HD Wallet (bip32)](https://github.com/bitcoin/bips/blob/master/bip-0032/derivation.png)
[Mnemonic wordlists reference (bip39)](https://github.com/bitcoin/bips/blob/master/bip-0039/bip-0039-wordlists.md) 
[HD Wallet coin type list (bip44)]( https://github.com/satoshilabs/slips/blob/master/slip-0044.md)  
m / purpose' / coin_type' / account' / change / address_index
```js
                                                        / address 0
                coinType 0(btc) -- account 0 -- change 0  
              /                                         \ address 1
root -- BIP44 
              \
                coinType 60(eth) -- account 0 -- change 1 -- address 0
                          
```
 
## Initialization
### Mnemonic Initialization [example](init/mnemonic.js) 
### Seed Initialization  [example](init/seed.js) 


## Basic Usage

### **Get BTC ETH TRX address :** [example](init/mnemonic.js) 
### **Get keypair**   [get keypair example](./test/index.getkeypair.test.js)

## Advanced Usage
### **extension**  [example](init/extension/index.js) 

# License

[MIT](./LICENSE)

### Donor Address
```js
"BTC": "1HthGRdzxunKAiMSazDdL8PZhE4qWpeBNK", 
"BCH": "12owPGh3cXLk8HevCEx5fZAMPqZPBgvgmX",
"LTC": "LchXCPCtYTKUvksjf5RvkZhCwvYQrYewaa",
"ETH": "0x4E04823FDF08E862201a4cfA595dc1Ec72AdF3Ab",
"TRX": "TZFH9KReZpsWZZ9Q2bVyXGQtmvVL3PV8gE",
```
