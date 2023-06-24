const puppeteer = require('puppeteer');


const getDetailsByStockName = async (url) => {
     try {
          const browser = await puppeteer.launch({ headless: true });
          const page = await browser.newPage()
          await page.goto(url)
          console.log(url);

          //Stock Price in Bold
          // const grabStockPrice = await page.$('.inprice1.nsecp');
          // const stockValue = await page.evaluate(el => el.getAttribute("rel"), grabStockPrice);
          // console.log("Stock Price: " + stockValue);

          const details = await page.evaluate(() => {
               const headTitle = document.querySelector(".inid_name h1")
               const sectorTitle = document.querySelector(".inid_name span strong")

               const grabStockPrice = document.querySelector('.inprice1.nsecp');
               const stockValue = grabStockPrice.getAttribute("rel");
               const change = document.querySelector(".pricupdn.nsechange")

               const currentDateTime = document.querySelector(".nseasondate")

               const previousClose = document.querySelector(".nseprvclose.bseprvclose")
               const todayOpen = document.querySelector(".nseopn.bseopn")

               const dayLPrice = document.querySelector(".FL.nseLP")
               const dayHPrice = document.querySelector(".FR.nseHP")

               const weekLPrice = document.querySelector(".FL.nseL52")
               const weekHPrice = document.querySelector(".FR.nseH52")

               const volume = document.querySelector(".rangamount.nsevol")
               const marketCap = document.querySelector(".nsemktcap.bsemktcap")
               const dividendYield = document.querySelector(".nsedy.bsedy")

               // return(
               //      "Price Change: " + change.innerText + "\n" + currentDateTime.innerText + "\n" + "Previous Close: " + previousClose.innerText + "\n" + "Open: " + todayOpen.innerText + "\n" + "Day Low: " + dayLPrice.innerText + "\n" + "Day High: " + dayHPrice.innerText + "\n" + "52 Week Low: " + weekLPrice.innerText + "\n" + "52 Week High: " + weekHPrice.innerText + "\n" + "Volume: " + volume.innerText + "\n" + "Market Cap(Rs. Cr): " + marketCap.innerText + "\n" + "Dividend Yield: " + dividendYield.innerText
               // );
               return {
                    Stock_Name: headTitle.innerText,
                    Sector: sectorTitle.innerText,
                    Stock_Price: stockValue,
                    Price_Change: change.innerText,
                    date: currentDateTime.innerText,
                    Previous_Close: previousClose.innerText,
                    Open: todayOpen.innerText,
                    Day_Low: dayLPrice.innerText,
                    Day_High: dayHPrice.innerText,
                    "52_Week_Low": weekLPrice.innerHTML,
                    "52_Week_High": weekHPrice.innerText,
                    Volume: volume.innerText,
                    "Market Cap(Rs. Cr)": marketCap.innerText,
                    Dividend_Yield: dividendYield.innerText
               }
          });
          console.log(details);
          await browser.close();
          return details;
     } catch (error) {
          console.log(error);
          return null
     }
}

     module.exports = { getDetailsByStockName }