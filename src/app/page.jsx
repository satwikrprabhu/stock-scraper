'use client'
import Search from "@/components/Search2"
// import { getIndexValues } from "./api/getIndexValues"
// import { getTrendingStocks } from "./api/getTrendingStocks"
import { useEffect, useState } from "react"
import StockDisplay from "@/components/StockDisplay"

const Home = () => {
  // const [trendStocks,setTrendStock] = useState([]);
  const [stockResults, setStockResults] = useState(false);

  //   useEffect(()=>{
  //   const fetchTrendStocks = async ()=>{
  //     try{
  //       const trendValues = await getTrendingStocks()
  //       setTrendStock(trendValues)
  //       console.log(trendStocks)
  //     }
  //     catch(err){
  //       console.log(err)
  //     }
  //   };
  //   fetchTrendStocks();
  //  },[]);
  //Get Index Values
  // const [indexValues,setIndexValues] = useState([]);
  //   useEffect(()=>{
  //   const fetchIndexValues = async ()=>{
  //     try{
  //       const values = await getIndexValues();
  //       setIndexValues(values);
  //     }catch(err){
  //       console.log(err);
  //     }
  //   };
  //   fetchIndexValues();

  // },[]);

  return (

    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-gray-700 min-h-screen flex flex-col justify-center items-center">
      <div className="w-full flex flex-col items-center justify-center space-y-7">
        {!stockResults && <h1 className="text-5xl md:text-6xl bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent font-bold italic">Speak Stocks</h1>}
        {!stockResults ? <Search setStockResults={setStockResults} /> : <StockDisplay stock={stockResults} />}
      </div>


      {/* Indices */}
      {/* <div className="flex flex-col md:flex-row  justify-between md:justify-center  m-1 mx-4 md:mx-0 gap-7 text-base">
      <div className="border border-gray-300 p-3 rounded-md text-center" style={{color: indexValues.Nifty50Change > 0 ? '#03fc0b' : '#b30000'}}>
  <span className="font-bold text-white">Nifty50:&nbsp;</span>
  {indexValues.Nifty50}&nbsp;
  ({indexValues.Nifty50Change > 0?"+":""}{indexValues.Nifty50Change}%)
</div>
        <div className="border border-gray-300 p-3 rounded-md text-center" style={{color: indexValues.Sensex_Change > 0 ? '#03fc0b' : '#b30000'}}>
  <span className="font-bold text-white">Sensex:&nbsp;</span>
  {indexValues.Sensex}&nbsp;
  ({indexValues.Sensex_Change > 0?"+":""}{indexValues.Sensex_Change}%)
</div>
<div className="border border-gray-300 p-3 rounded-md text-center" style={{color: indexValues.NiftyBankChange > 0 ? '#03fc0b' : '#b30000'}}>
  <span className="font-bold text-white">Nifty Bank:&nbsp;</span>
  {indexValues.NiftyBank}&nbsp;
  ({indexValues.NiftyBankChange > 0?"+":""}{indexValues.NiftyBankChange}%)
</div>
      </div> */}

      {/* <div className="lg:w-1/2 min-h-screen px-8 flex flex-col justify-center">
        <h1 className="text-4xl font-semibold text-center">Trending Stocks</h1>
        <div className="flex flex-col text-center mt-16 space-y-10 border">
          <div className="flex flex-row justify-around">
            <li className="list-none p-4">Stock Name</li>
            <li className="list-none p-4">Value</li>
            <li className="list-none p-4">Change</li>
            <li className="list-none p-4">Value in Cr</li>
          </div>
        {trendStocks.map((stock, index) => (
            <div key={index} className="flex flex-row justify-between border bottom-0 p-1 gap-4">
              <p>{stock.stockName}</p>
              <p>{stock.stockPrice}</p>
              <p>{stock.priceChange}</p>
              <p>{stock.valueInCr}</p>
              <hr />
            </div>
          ))}
        </div>
      </div> */}
    </div>
  )
}

export default Home
