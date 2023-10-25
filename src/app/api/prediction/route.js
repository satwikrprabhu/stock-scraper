import { NextResponse } from "next/server";
import { load } from 'cheerio'
const util = require("util");
const { getDetailsByStockName } = require('../getStockDetails')
const exec = util.promisify(require("child_process").exec);

export async function POST(req, res) {
	try {
		const body = await req.json();
		console.log(body);
		const command = "python ai.py " + body.ticker 
		console.log(command)
		const result = await exec(command)
		return NextResponse.json({ message: "works", data: result.stdout});
	}
	catch (error) {
		console.log(error)
		return NextResponse.json({ message: "error" })
	}
}
