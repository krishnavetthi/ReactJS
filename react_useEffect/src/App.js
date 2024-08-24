import React from "react"
import Card from "./card"
import Axios from 'axios'
import {useState,useEffect} from 'react'
function App(){
    const [details, setDetails] = useState({});
    const fetchDetails = async()=>{
        const {data} = await Axios.get('https://randomuser.me/api');
        console.log(data)

        const details = data.results[0];
        setDetails(details);
    }


    let list = ["Kittu","Saikrishna"];

    useEffect(()=>{fetchDetails()},list);

    return(
        <>
        <h1>Krishna vetthi</h1>
        <Card myname="Krishna" list={list} details={details}/>
        <button onClick={fetchDetails}>
            getDetails
        </button>
        </>    
    )
}

export default App;