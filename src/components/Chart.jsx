import axios from "axios";
import { useEffect, useState } from "react";
import { render } from "react-dom";

export default function Chart({ stockName }) {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        axios.post('/api/getStockChart')
            .then(data => {
                if (data.status === 200) {
                    setChartData(data.data.data);
                } else {
                    setChartData([]);
                }
            }).catch(err => {
                setChartData([]);
                console.log(err);
            }
            )
    }, [])
    return (
        <div id="history">
        </div>
    )
}
