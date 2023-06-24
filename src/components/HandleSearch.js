import { searchForm } from "./Search";
const handleSearch = (e) => {
    e.preventDefault();
    const query = document.getElementById('searchBox').value;
    
    axios.post("http://localhost:5000/getStockLink", { name: query })
        .then(data =>{
            console.log(data.data.data);
            const card = <div>
            <div id="card">
                {JSON.stringify(data.data.data)}
            </div>
            <br />
            </div>
            document.getElementById("stock-details").appendChild(card);
        });
};

document.getElementById("searchForm").addEventListener('submit', handleSearch);
