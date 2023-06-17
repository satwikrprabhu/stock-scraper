

const Home = () => {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row pt-20">
      <div  className="md:w-1/2">
      <div>
      <h1 className="text-5xl text-center font-semibold p-4 mt-20">Unleash the 
      </h1>
      <h1 className="text-5xl text-center text-white font-semibold">Power of Speech</h1></div>
      <div  className="flex justify-center items-center mt-20">
        <input type="text" className="px-4 py-3 w-3/4 text-black text-2xl rounded-lg"/>
      </div>
      <div className="flex flex-row justify-between md:justify-evenly text-xl mx-4 mt-20">
        <div className="border border-white p-4 rounded-xl">Nifty50</div>
        <div className="border border-white p-4 rounded-xl">Sensex</div>
        <div className="border border-white p-4 rounded-xl">Bank Nifty</div>
      </div></div>
      <div className="md:w-1/2">
        <h1 className="text-4xl font-semibold text-center mt-40 md:mt-24">Trending Stocks</h1>
        <div className="flex flex-col text-center mt-16 space-y-10">
          <div>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
        </div>
      </div>
    </div>
  )
}

export default Home