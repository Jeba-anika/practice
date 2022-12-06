import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useFetchProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        axios.get('https://main.hangerstock.com/api/auction/all')
        .then((response)=>{
            console.log(response.data.data);
            setProducts(response.data.data)
        })
        
    },[])

    return products;
};

export default useFetchProducts;