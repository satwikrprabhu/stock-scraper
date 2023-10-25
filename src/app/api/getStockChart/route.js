import axios from 'axios';
import { NextResponse } from 'next/server'
const { load } = require('cheerio');
export async function POST(req) {
    // const req_body = await req.json()

    var formData = new FormData();
    formData.append("frm_yr", "2022");
    formData.append("frm_mth", "01");
    formData.append("frm_dy", "01");
    formData.append("to_yr", "2023");
    formData.append("to_mth", "01");
    formData.append("to_dy", "01");
    formData.append("hdn", "daily");
    formData.append("x", "20");
    formData.append("y", "18");

    const result = await fetch("https://www.moneycontrol.com/stocks/hist_stock_result.php?ex=B&sc_id=TCS&mycomp=Tata Consultancy Services", {
        method: "POST",
        body: formData,
    })
    const body = await result.text();
    const $ = load(body)

    // const table = $('.tblchart > tbody > tr')
    // const split = new RegExp('\n\n', 'g')
    // const data = Array.from(table.each((element) => {
    //     return $($(element).find("td")).text()
    // }))
    // console.log(data);
    var data = [];
    $(".tblchart > tbody > tr").each((element) => {
        const ths = $(element).find("th");
        $(ths).each((i, element) => {
            tableHeaders.push(
                $(element)
                    .text()
                    .toLowerCase()
            );
        });

        const table_rows = $($(element).find("td"))
        var row_data = {};
        $(table_rows).each((i, ele) => {
            row_data[ths[i]] = $(ele).text()
        })

        data.push(row_data);
        console.log(ths);
    })
    console.log(data);
    NextResponse.json({ data })
}
