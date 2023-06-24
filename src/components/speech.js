import { searchBar,searchForm } from "./Search"; //possible changes


window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition = 'en';

recognition.addEventListener('result',(e)=>{
    const voiceList = Array.from(e.results)
    .map(voiceSet => voiceSet[0])
    .map(transList => transList.transcript)
    .join('');
    
    searchBar.value = voiceList; //possible changes

    Array.from(e.results).forEach(async(ele)=>{
        if(ele.isFinal){
            console.log(voiceList);
            await handleSearch(voiceList); 
        }
    });

    
});

recognition.start();


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



