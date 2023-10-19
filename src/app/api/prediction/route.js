import { NextResponse } from "next/server";
const util = require("util");
const exec = util.promisify(require("child_process").exec);

export async function GET(req, res) {
	const url = process.env.SCRAPE_LOCATION;

	const r = await fetch(url);
	const page = await r.text();
	const $ = load(page);
	console.log(url);
	const ticker = $(
		`.comp_inf > li:nth-child(5) > ul:nth-child(2) > li:nth-child(2) > p:nth-child(2)`
	);
	const result = await exec("python3 ai.py");
	return NextResponse.json({ message: "works", data: result.stdout });
}
