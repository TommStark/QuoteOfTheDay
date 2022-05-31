import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import DailyCard from "./DailyCard";


function DailyContainer() {
    const [values, setValues] = useState([]); 
    const [randomValue, setRandomValue] = useState(0);
    const [randomQuote, setRandomQuote] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const msg = new SpeechSynthesisUtterance()
    
    const speechHandler = (text) => {
        msg.text = text
        msg.lang = 'es'
        window.speechSynthesis.speak(msg)
    }
    
    function randomIntFromInterval(min, max) { 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    
    function onClickRandomQuote(){
        const index = randomIntFromInterval(0,values.length-1)
        setRandomValue(index)
        setRandomQuote(values[index])
    }

    useEffect(()=>{
        if(values.length){
            onClickRandomQuote();
        } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[values.length])

    useEffect(()=>{
        Papa.parse(process.env.REACT_APP_EXCEL_URL, {
            download: true,
            header: true,
            complete: (results) => {
                setValues(results.data);
                setIsLoading(false);
        },
        });
    },[])

    return ( 

            <DailyCard
                quote={randomQuote}
                onClickRandomQuote={onClickRandomQuote}
                onClickSpeechHandler={speechHandler}
                randomValue={randomValue}
                isLoading={isLoading}
            />

        );
}

export default DailyContainer;