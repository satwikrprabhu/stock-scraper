const puppeteer = require("puppeteer");
const { getDetailsByStockName } = require("./stockDetails")
async function scrape(req, res) {
    try {
        console.log((req.body.name));
        const namePattern = new RegExp(req.body.name, "gi");
        const browser = await puppeteer.launch({
            headless: true,
            defaultViewport: null,
        });
        const page = await browser.newPage();

        await page.goto("https://www.moneycontrol.com/india/stockpricequote/", { waitUntil: 'domcontentloaded' });
        const stocks = await page.evaluate(() => {
            const result = document.querySelectorAll('.bl_12');
            return Array.from(result).map(element => {
                return {
                    stockName: element.innerHTML,
                    link: element.href
                }
            }
            )
        })

        const filterdList = stocks.filter((element) => element.stockName.match(namePattern))
        console.log(filterdList);

        if (filterdList.length == 1) {
            return res.status(200).json({ data: [await getDetailsByStockName(filterdList[0].link)] })
        }
        return res.status(200).json({data:filterdList})
    } catch (error) {
        console.log(error);
        res.end("Error")
    }
};

module.exports = scrape
