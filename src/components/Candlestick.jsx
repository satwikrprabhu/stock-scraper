import React, { Component, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function Candlestick({ticker}) {
	const [ChartData, setChartData] = useState([]);
	const options = {};
	useEffect(() => {
		axios
			.get(
				`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}.BSE&outputsize=full&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
			)
			.then((res) => {
				console.log(res);
				const data = res.data["Time Series (Daily)"];
				const plotKeys = Object.keys(data).slice(0, 100);
				const plotValues = Object.values(data).slice(0, 100);

				console.log(plotKeys);
				console.log(plotValues);

				let temp = [];
				for (let i = 0; i < plotKeys.length; i++) {
					temp.push({
						x: plotKeys[i],
						y: Object.values(plotValues[i]).slice(0, 4),
					});
				}
				setChartData(temp);
				console.log(temp);
			});
	}, [ticker]);

	return (
		<div className="text-white">
			{typeof window !== "undefined" && ChartData.length > 0 && (
				<Chart
					options={{
						mode: "dark",
						palette: "palette5",
						monochrome: {
							enabled: false,
							color: "#255aee",
							shadeTo: "light",
							shadeIntensity: 1,
						},
					}}
					series={[{ data: ChartData }]}
					type="candlestick"
					width={800}
					height={300}
				/>
			)}
		</div>
	);
}
