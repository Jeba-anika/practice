import React, { useEffect, useState } from 'react';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('https://main.hangerstock.com/api/auction/all')
        .then(res => res.json())
        .then(apiData => {
            console.log(apiData.data)
            setProducts(apiData.data)
        })
    },[])

    return (
        <div className='products'>
            {
                products.map(product => <div className='eachProduct' key={product.id}>
                    <h2>{product.title}</h2>
                    <h2>{product.category}</h2>
                    <p>{product.description}</p>
                    <button className='btn'>View Details</button>
                </div>)
            }
        </div>
    );
};

export default Home;