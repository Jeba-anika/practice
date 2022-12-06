import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFetchProducts from '../../hooks/useFetchProducts';
import './Home.css'
import useHandleEachAuction from '../../hooks/useHandleEachAuction';

const Home = () => {
    const products = useFetchProducts()
   
    return (
        <div className='products'>
            { 
                products.map(product => <div className='eachProduct' key={product.id}>
                    <h2 className='card-title'>{product.title}</h2>
                    <h4>Category: {product.category}</h4>
                    <p>{product.description}</p>
                    <button onClick={()=> useHandleEachAuction} className='btn'><Link className='btn-link' to={`/eachAuction/${product.id}`}>View Details</Link></button>
                </div>)
            }
        </div>
    );
};

export default Home;