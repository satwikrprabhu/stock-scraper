'use client'
import Search from "@/components/Search"
import { getIndexValues } from "./api/getIndexValues"
import { getTrendingStocks } from "./api/getTrendingStocks"
import { useEffect, useState } from "react"
const Home = () => {

  const [trendStocks,setTrendStock] = useState([]);
 useEffect(()=>{
  const fetchTrendStocks = async ()=>{
    try{
      const trendValues = await getTrendingStocks()
      setTrendStock(trendValues)
      console.log(trendStocks)
    }
    catch(err){
      console.log(err)
    }
  };
  
  fetchTrendStocks();
 },[]);

  //Get Index Values
  const [indexValues,setIndexValues] = useState([]);
  useEffect(()=>{
  const fetchIndexValues = async ()=>{
    try{
      const values = await getIndexValues();
      setIndexValues(values);
    }catch(err){
      console.log(err);
    }
  };
  fetchIndexValues();

},[]);

  return (
    <div className="min-h-screen w-full flex flex-wrap md:flex-row items-center justify-between bg-slate-950">
      <div  className="lg:w-1/2 min-h-screen flex flex-col justify-center">
      <div className="flex flex-col items-center">
      <h1 className="text-5xl font-semibold mt-8 text-left">Unleash the 
      </h1>
      <h1 className="text-5xl text-white font-semibold text-left">Power of Speech</h1></div>
      <Search />
      <div className="flex flex-col md:flex-row gap-4 justify-between md:justify-evenly text-center m-1 mx-4 md:mx-0 text-base">
    {/* Indices */}
      <div className="border border-gray-300 p-3 rounded-md" style={{color: indexValues.Nifty50Change > 0 ? '#03fc0b' : '#b30000'}}>
  <span className="font-bold text-white">Nifty50:&nbsp;</span>
  {indexValues.Nifty50}&nbsp;
  ({indexValues.Nifty50Change > 0?"+":""}{indexValues.Nifty50Change}%)
</div>
        <div className="border border-gray-300 p-3 rounded-md" style={{color: indexValues.Sensex_Change > 0 ? '#03fc0b' : '#b30000'}}>
  <span className="font-bold text-white">Sensex:&nbsp;</span>
  {indexValues.Sensex}&nbsp;
  ({indexValues.Sensex_Change > 0?"+":""}{indexValues.Sensex_Change}%)
</div>
<div className="border border-gray-300 p-3 rounded-md" style={{color: indexValues.NiftyBankChange > 0 ? '#03fc0b' : '#b30000'}}>
  <span className="font-bold text-white">Nifty Bank:&nbsp;</span>
  {indexValues.NiftyBank}&nbsp;
  ({indexValues.NiftyBankChange > 0?"+":""}{indexValues.NiftyBankChange}%)
</div>

      </div></div>
      <div className="md:w-1/2">
        <h1 className="text-4xl font-semibold text-center">Trending Stocks</h1>
        <div className="flex flex-col text-center mt-16 space-y-10 border">
          <div className="flex flex-row justify-around">
            <li className="list-none p-4">Stock Name</li>
            <li className="list-none p-4">Value</li>
            <li className="list-none p-4">Change</li>
            <li className="list-none p-4">Value in Cr</li>
          </div>
        {trendStocks.map((stock, index) => (
            <div key={index} className="flex flex-row justify-between border p-1 gap-4">
              <p>{stock.stockName}</p>
              <p>{stock.stockPrice}</p>
              <p>{stock.priceChange}</p>
              <p>{stock.valueInCr}</p>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home