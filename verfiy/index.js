'use strict';
const addressVerify = require("hd-address-verify")
const hdData = {
    "BTC": "1442MZYQMh17ZoWdLMferxM4U9ppqGQbuK",
    "BTC_TEST": "miZyecdPAiSNLuzF3ve2gsZPL9RXjA51JS",
    "BCH": "12Ut7DckjmdzU4Kx8cZeCfsyqufcrTFkFq",
    "BCH_TEST": "mgzqQGhjYo5FFAoZrBY22b6JhuGKmm3fb9",
    "LTC": "LbspHRvEu8PpyMq2EpR7rJNN5D3kzzsk9a",
    "LTC_TEST": "mxApKGhPdVb2VfcUnFQCQCWvizHBmQ8MCV",
    "ETH": "0xe4fa4CEFEa4ebfB79f4527a71EEF983700119d58",
    "TRX": "TQawSTYUsWvibpQURRUxJhUcLZdEbuFdGT",
}
let example = () => {
    //BTC
    let isBtcAdrr = addressVerify.BTC(hdData.BTC)
    console.log("BTC address verify", isBtcAdrr, hdData.BTC)
    let isBtcTestAdrr = addressVerify.BTC_TEST(hdData.BTC_TEST)
    console.log("BTC_TEST address verify", isBtcTestAdrr, hdData.BTC_TEST)

    //BCH
    let isBchAdrr = addressVerify.BTC(hdData.BCH)
    console.log("BCH address verify", isBchAdrr, hdData.BCH)
    let isBchTestAdrr = addressVerify.BTC_TEST(hdData.BTC_TEST)
    console.log("BCH_TEST address verify", isBchTestAdrr, hdData.BTC_TEST)

    //LTC
    let isLtcAdrr = addressVerify.BTC(hdData.LTC)
    console.log("LTC address verify", isLtcAdrr, hdData.LTC)
    let isLtcTestAdrr = addressVerify.BTC_TEST(hdData.LTC_TEST)
    console.log("LTC_TEST address verify", isLtcTestAdrr, hdData.LTC_TEST)

    //ETH
    let isEthAdrr = addressVerify.ETH(hdData.ETH)
    console.log("ETH address verify", isEthAdrr, hdData.ETH)

    //TRX
    let isTrxAdrr = addressVerify.TRX(hdData.TRX)
    console.log("TRX address verify", isTrxAdrr, hdData.TRX)

    //Address error
    let isTrxAdrrErr = addressVerify.TRX(hdData.TRX+"1")
    console.log("TRX address verify", isTrxAdrrErr, hdData.TRX+"1")
}

example()