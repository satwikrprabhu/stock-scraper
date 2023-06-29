const { load } = require("cheerio")

const getTrendingStocks = async()=>{
    const result = await fetch("https://www.moneycontrol.com/");
    const page = await result.text();
    const $ = load(page)
    console.log("Trending Stocks Fetched")
    const trendingStocks=[]
    let i = 1;
    while(i<=5){
        const stockName = $(`#in_maNSE > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(${i}) > td:nth-child(1) > a:nth-child(1)`)
        const stockPrice = $(`#in_maNSE > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(${i}) > td:nth-child(2) > b:nth-child(1)`)
        const priceChange = $(`#in_maNSE > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(${i}) > td:nth-child(3)`)
        const valueInCr = $(`#in_maNSE > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(${i}) > td:nth-child(4)`) 
        trendingStocks.push({
            stockName: stockName.text(),
            stockPrice: stockPrice.text(),
            priceChange:priceChange.text(),
            valueInCr:valueInCr.text(),
        })
        i=i+1;
    }
    console.log("Trending Stocks Fetched")
    console.log(trendingStocks)
    return trendingStocks;
}

module.exports = { getTrendingStocks }