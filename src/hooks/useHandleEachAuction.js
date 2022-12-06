import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useHandleEachAuction = (id) => {
    const [loading, setLoading] = useState(false)
    const [eachAuction, setEachAuction] = useState([])

    useEffect(()=>{
        setLoading(true)
        axios.post('https://main.hangerstock.com/api/auction/get/id',{
            auction_id : id
        })
        .then((response)=>{
            console.log(response.data.data)
            setEachAuction(response.data.data)
            setLoading(false)
        })
    },[id])

    return [eachAuction, loading];
};

export default useHandleEachAuction;