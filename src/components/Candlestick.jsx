import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function Candlestick({ ticker }) {
	const [ChartData, setChartData] = useState([]);
	const [ChartType, setChartType] = useState("TIME_SERIES_INTRADAY");
	const [Loading, setLoading] = useState(true);
	const [Error, setError] = useState("");

	useEffect(() => {
		setLoading(true)
		axios
			.get(
				`https://www.alphavantage.co/query?function=${ChartType}${
ChartType === "TIME_SERIES_INTRADAY" ? "&interval=5min" : ""
}&symbol=${ticker}${
ChartType === "TIME_SERIES_DAILY" ? ".BSE" : ""
}&outputsize=full&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
			)
			.then((res) => {
				console.log(res);
				const data =
					ChartType === "TIME_SERIES_DAILY"
						? res.data["Time Series (Daily)"]
						: res.data["Time Series (5min)"];
				if(res.data["Information"]){
					setError("Oops! This was a free trial visit again tomorrow for more")
				    return setLoading(false)	
				}
				const plotKeys = data
					? Object?.keys(data).slice(0, 100)?.reverse()
				: [];
				const plotValues = data
					? Object?.values(data)
					: [].slice(0, 100)?.reverse();

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
				setLoading(false)
				console.log(temp);
		}).catch(error=>{
				console.log(error)
				setError("Oops! There was an error loading the chart")
				setLoading(false)
		})
		}, [ticker, ChartType]);

	return (
		<div className="text-black">
			<select
				className="rounded active:border-none bg-gradient-to-r from-slate-400 to-gray-600 bg-transparent text-white font-semibold text-center"
			onChange={(e) => {
					setChartType(e.target.value);
				}}
				>
				<option value={"TIME_SERIES_DAILY"}>Daily</option>
				<option value={"TIME_SERIES_INTRADAY"}>Intraday</option>
			</select>
			 {!Loading ? (!Error ? (typeof window !== "undefined" && ChartData.length > 0 && 
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
						xaxis: {
							labels: {
								style: {
									colors: "grey",
								},
							},
						},
						yaxis: {
							labels: {
								style: {
									colors: "grey",
								},
							},
						},
					}}
					series={[{ data: ChartData }]}
					type="candlestick"
					width={800}
					height={300}
				/>
			):<h3 className="text-white">{Error}</h3>):<h3 className="text-white">Loading Chart...</h3>}
		</div>
	);
}
