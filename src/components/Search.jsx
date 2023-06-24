'use client'

import { useState, useEffect } from "react"
import axios from "axios";

export default function Search() {
	const [search, setSearch] = useState('');
	const [QueryResults, setQueryResults] = useState([]);
	const [searchBar, setSearchBar] = useState("");

	useEffect(() => {
		window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
		const recognition = new SpeechRecognition();
		recognition.interimResults = true;
		// recognition.lang = 'en';

		recognition.addEventListener('result', (e) => {
			const voiceList = Array.from(e.results)
				.map(voiceSet => voiceSet[0])
				.map(transList => transList.transcript)
				.join('');
			setSearch(voiceList);
			Array.from(e.results).forEach(async (ele) => {
				if (ele.isFinal) {
					await handleSearch(ele[0].transcript);
				}
			});


		});

		recognition.start()
	}, [])


	const fillDetails = (data) => {
		let data_arr = [];
		for (const key in data) {
			data_arr.push(<div className="flex">
				<p>{key}</p>
				<p>{data[key]}</p>
			</div>)
		}
		return data_arr;
	}

	const handleSearch = async (str) => {
		console.log("searching");
		axios.post("/api/getStockLink", { name: str })
			.then(data => {
				console.log(data.data.data);
				setQueryResults(data.data.data);
			});
		console.log("Done");
	};

	return (
		<>
			<div className="flex justify-center items-center mt-20">
				<form id="search-form" onSubmit={(e) => handleSearch(e)} className="flex justify-center md:justify-between">
					<input type="text" id="search-bar" className="px-4 py-3 text-black text-2xl rounded-lg" value={search}
						placeholder="Search..."
					/>
					<button className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold">🚀</button>
				</form>
			</div>
			<div id="stock-details">
				{QueryResults.length > 0 && QueryResults.map((element, index) => {
					return (
						<div key={index}>
							<a href={element.link}>{element.stockName}</a>
							{element.link ? null : fillDetails(element)}
							<br />
						</div>
					)
				})}
			</div>
		</>
	)
}

