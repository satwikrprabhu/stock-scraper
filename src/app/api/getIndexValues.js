const { load } = require('cheerio');
const getIndexValues = async () => {
    try {
        const result = await fetch("https://www.moneycontrol.com/technicals/gapup/nse/index.html/markets/indian-indices/?classic=true");
        const page = await result.text();
        const $ = load(page)
        const sensex = $("table.tbldata14:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2)")
        const sensexchange = $("table.tbldata14:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(4)")
        const nifty50 =$("table.tbldata14:nth-child(3) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2)")
        const nifty50change =$("table.tbldata14:nth-child(3) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(4)")
        const niftybank =$("table.tbldata14:nth-child(48) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2)")
        const niftybankchange =$("table.tbldata14:nth-child(48) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(4)")
        console.log("https://www.moneycontrol.com/");
       
        console.log(sensex.text());
        console.log(sensexchange.text());
        console.log(nifty50.text());
        console.log(nifty50change.text());
        console.log(niftybank.text());
        console.log(niftybankchange.text());
        const details = {
            Sensex: sensex.text(),
            Sensex_Change: sensexchange.text(),
            Nifty50: nifty50.text(),
            Nifty50Change:nifty50change.text(),
            NiftyBank: niftybank.text(),
            NiftyBankChange:niftybankchange.text()
        }
        console.log("Works")
        return details;
    } catch (error) {
        console.log(error);
        return null
    }
}

module.exports = { getIndexValues }