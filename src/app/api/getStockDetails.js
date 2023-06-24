const { load } = require('cheerio');

const getDetailsByStockName = async (url) => {
    try {
        const result = await fetch(url);
        const page = await result.text();
        const $ = load(page)
        console.log(url);
        const headTitle = $(".inid_name h1")
        const sectorTitle = $(".inid_name span strong")

        const grabStockPrice = $('.inprice1.nsecp');
        const stockValue = grabStockPrice.attr("rel");
        const change = $(".pricupdn.nsechange")

        const currentDateTime = $(".nseasondate")

        const previousClose = $(".nseprvclose.bseprvclose")
        const todayOpen = $(".nseopn.bseopn")

        const dayLPrice = $(".FL.nseLP")
        const dayHPrice = $(".FR.nseHP")

        const weekLPrice = $(".FL.nseL52")
        const weekHPrice = $(".FR.nseH52")

        const volume = $(".rangamount.nsevol")
        const marketCap = $(".nsemktcap.bsemktcap")
        const dividendYield = $(".nsedy.bsedy")

        console.log(change.text());
        const details = {
            Stock_Name: headTitle.text(),
            Sector: sectorTitle.text(),
            Stock_Price: stockValue,
            Price_Change: change.text(),
            date: currentDateTime.text(),
            Previous_Close: previousClose.text(),
            Open: todayOpen.text(),
            Day_Low: dayLPrice.text(),
            Day_High: dayHPrice.text(),
            "52_Week_Low": weekLPrice.innerHTML,
            "52_Week_High": weekHPrice.text(),
            Volume: volume.text(),
            "Market Cap(Rs. Cr)": marketCap.text(),
            Dividend_Yield: dividendYield.text()
        }
        return details;
    } catch (error) {
        console.log(error);
        return null
    }
}

module.exports = { getDetailsByStockName }