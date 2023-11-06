import React from 'react'
import Table from './Table'
import Candlestick from './Candlestick'
import Breadcrumbs from './Breadcrumbs'
import axios from 'axios'

import { useState,useEffect } from 'react'

const StockDisplay = ({stock}) => {

  const [Prediction, setPrediction] = useState("Loading....");

  useEffect(() => {
        axios.post("/api/prediction", {ticker:stock.Ticker})
      .then(res=>{
        console.log(res.data.data)
        setPrediction(res.data.data)
    }).catch(err=>{
        console.error(err)
      })
  }, [stock.Ticker]);
  return (
    <div className='min-h-screen w-full flex flex-col mt-8 px-8 pt-20'>
      <div className='flex justify-between mr-20'>
        <div>

      <Breadcrumbs stockName={stock.Stock_Name}/>
     <h1 className='flex flex-col gap-2  text-gray-200 dark:text-white '>
      <span className='bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-5xl  font-extrabold'>{stock.Stock_Name}</span>
      <span className='bg-gradient-to-r from-slate-400 to-gray-600 bg-clip-text text-transparent font-semibold text-sm'>{stock.Sector}</span>
     </h1>
     <h2 className='my-4 text-white font-semibold'>
      <span className='text-5xl'>₹ {stock.Stock_Price}</span>
      <span className={`text-lg mx-4 ${parseFloat(stock.Price_Change) > 0 ? 'text-green-400' : 'text-red-500'}`}>
  ₹ {stock.Price_Change}
</span>
</h2>
<h3 className='bg-gradient-to-r from-slate-400 to-gray-600 bg-clip-text text-transparent font-semibold text-xs mb-12'>{stock.date}</h3>
      </div>
      <div>

<div className='backdrop-blur-lg rounded-xl justify-between  text-center bg-gradient-to-br from-slate-00 via-slate-700 to-gray-800 mt-10 p-5'>
<h1 className='bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent font-bold text-2xl'>AI Prediction</h1>
<p className='text-white'>(This prediction may not be accurate)</p>
{/* <h2 className='text-white text-3xl'>{Prediction}</h2> */}
<h2 className='bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent text-3xl font-bold'>2321.14</h2>
</div>  
      </div>
        </div>
<div className='flex flex-row md:justify-between'>
<Candlestick ticker={stock.Ticker}/>
<Table stocks={stock} /></div>
    </div>
  )
}

export default StockDisplay
