import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Table } from '../UI/Table';

const CallAPI = () => {

const [data, setData] = useState(null);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(true);

// using async and await
useEffect(() => {
    getData();
}, [])

const getData = async () => {
    await axios('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        setData(response.data)
    })
    .catch(error => {
        console.error("Error Occured while fetching data");
        setError(error);
    })
    .finally(()=>{
        setLoading(false);
    })
}

    if(loading){
        return 'Loading...';
    }
    if(error){
        return 'Error Occured';
    }

    return(
    
            <>
            <h1>Fetched Data from an API</h1>
            <Table users = {data}/>

            </>
    )
}

export default CallAPI;