import React, { useState } from "react";
import { coinData } from '../../utils/coinData';

function homeLogic(){

    const [fromCoin, setFromCoin] = useState(coinData[0].symbol);
    const [fromValue, setFromValue] = useState(0);

    const [toCoin, setToCoin] = useState(coinData[1].symbol);
    const [toValue, setToValue] = useState(0);

    const handleFromCoin = (event: any) => {
        setFromCoin(event.target.value);
    };

    const handleFromValue = (event: any) => {
        setFromValue(event.target.value)
    }

    const handleToCoin = (event: any) => {
        setToCoin(event.target.value);
    };

    const handleToValue = (event: any) => {
        setToValue(event.target.value)
    }
    
    return {
        fromCoin, handleFromCoin,
        fromValue, handleFromValue,
        toCoin, handleToCoin,
        toValue, handleToValue
    }
}

export default homeLogic;