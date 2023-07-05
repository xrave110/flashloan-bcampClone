const networkConfig = {
    default: {
        name: "mainnet", // For now mainnet as a default
    },
    10: {
        name: "optimism",
        usdc: "0xe6b8a5CF854791412c1f6EFC7CAf629f5Df1c747",
        weth: "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889",
        link: "0x326C977E6efc84E512bB9C30f76E30c160eD06FB",
        velo_router_v2: "0x9c12939390052919aF3155f41Bf4160Fd3666A6f",
        sushiswap_router_v2: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
        //master_chef_v2: "0x0769fd68dFb93167989C6f7254cd0D766Fb2841F",
        ethUsdPriceFeed: "??",
        maticUsdPriceFeed: "??",
        automationUpdateInterval: "30",
        fee: "100000000000000",
        fundAmount: "100000000000000",
        oracle: "??",
        jobId: "??",
        subscriptionId: "??",
        vrfCoordinator: "??",
        keyHash: "??"
    },
    1: {
        name: "mainnet",
        fee: "100000000000000000",
        keyHash: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
        jobId: "29fa9aa13bf1468788b7cc4a500a45b8",
        fundAmount: "1000000000000000000",
        automationUpdateInterval: "30",
        ethUsdPriceFeed: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
        weth: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        usdc: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        link: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
        sushi: "0x6B3595068778DD592e39A122f4f5a5cF09C90fE2",
        uniswap_router_v2: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
        sushiswap_router_v2: "0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F",
        sushiswap_factory_v2: "0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac",
        master_chef_v2: "0xef0881ec094552b2e128cf945ef17a6752b4ec5d"
    },
}

module.exports = {
    networkConfig
}