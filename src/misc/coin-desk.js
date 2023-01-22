
import { useState, useEffect } from "react";
import axios from "axios";

const apiURL = "https://api.coindesk.com/v1/bpi/currentprice.json"

const CoinDesk = () => {

    const [price, setPrice] = useState(0);
    const [lastFetch, setLastFetch] = useState("");

    useEffect(() => {
        getDataWithAxios();
    }, []);// An empty array means the callback will only execute once


    const getDataWithAxios = async () => {
        const response = await axios.get(apiURL);
        console.log('coin-desk resp: ', response.data);
        setPrice(response.data.bpi.USD.rate);
        setLastFetch(response.data.time.updated);
    };

    const getDataWithFetch = async () => {
        const response = await fetch(apiURL);
        const jsonData = await response.json();
        console.log('coin-desk resp: ', jsonData);
        setPrice(jsonData.bpi.USD.rate);
        setLastFetch(jsonData.time.updated);
    };

    return (
        <div>
            <h5>Coin Desk</h5>
            <a href="https://api.coindesk.com/v1/bpi/currentprice.json">Coindesk's public API</a>

            <div>
                <h6>
                    BTC Price: {price}
                </h6>
                <small>
                    {lastFetch}
                </small>
            </div>
        </div>
    )
}

export default CoinDesk;