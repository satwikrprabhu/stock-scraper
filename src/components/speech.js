import { searchBar,searchForm } from "./Search"; //possible changes




const fillDetails = (card, data)=>{
    for(const key in data){
        const details =
        <div className="flex">
            <p>`${key}`</p>
            <p>{data[key]}</p>
        </div>
        
        card.appendChild(details)   //possible changes
    }
}

const handleSearch = async (value) => {
    
    console.log('waiting');
    await axios.post("http://localhost:5000/getStockLink", { name: value })
        .then(data => data.data.data.map((element) => {<div>
            <a href={element.link}>{element.stockName}</a>
            element.link ? null : fillDetails(card,element)
            <br />
            </div>
        }));
    console.log('done');
};



