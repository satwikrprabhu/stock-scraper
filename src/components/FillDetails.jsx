function FillDetails({ queryResults }) {
    return (
        <>
            {
                queryResults.length === 0
                ? 'no contents'
                : queryResults.length === 1
                    ?
                    (<div className="flex">
                        <p>{queryResults[0].Stock_Name}</p>
                    </div>)
                    : 
                    queryResults.map((stock, index) => {
                        return (
                            <div key={index}>
                                <a href={stock.link}>
                                    {stock.stockName}
                                </a>
                            </div>
                        )
                    })
            }
        </>
    );
}

export default FillDetails;