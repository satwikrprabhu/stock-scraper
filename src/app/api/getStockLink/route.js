const {getDetailsByStockName} = require('../getStockDetails')
const { load } = require('cheerio');
const { NextResponse } = require('next/server')
export async function POST(req, res) {
    try {


        const req_body = await req.json()
        const namePattern = new RegExp(req_body.name, "gi");

        const url = 'https://www.moneycontrol.com/india/stockpricequote/';
        const response = await fetch(url);
        const body = await response.text();
        let $ = load(body);

        const result = $('.bl_12');
        const stocks = Array.from(result).map(element => {
            return {
                stockName: element.attribs.title,
                link: element.attribs.href
            }
        }
        )

        const filterdList = stocks.filter((element) => element.stockName.match(namePattern))
        // console.log(filterdList)

        if (filterdList.length == 1) {
            return NextResponse.json({ data: [await getDetailsByStockName(filterdList[0].link)] })
        }
        return NextResponse.json({ data: filterdList })
    } catch (error) {
        console.log(error);
        NextResponse.json({ data: null })
    }
}
