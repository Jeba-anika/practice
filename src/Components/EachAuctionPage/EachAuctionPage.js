import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import useHandleEachAuction from '../../hooks/useHandleEachAuction';
import './EachAuctionPage.css'

const EachAuctionPage = () => {
    const params = useParams()
    const [eachAuction, loading] = useHandleEachAuction(params.id)



    return (
        <div className='container'>
            {loading && <div className='loading'></div>}
            {
                eachAuction && <div className='flex-container'>
                    <div>
                        <h2>Title: {eachAuction?.product_details?.title}</h2>
                        <h3>Category: {eachAuction?.product_details?.category}</h3>
                        <p>Description: {eachAuction?.product_details?.description}</p>
                        <p>Packaging Details: {eachAuction?.product_details?.packaging_details}</p>
                        <p>Quantity: {eachAuction?.product_details?.quantity}</p>
                        <p>Ship From: {eachAuction?.shipping_details?.ship_from}</p>
                        <p>Ship to:{eachAuction?.shipping_details?.ship_to}</p>
                        <p>Shipping Cost: {eachAuction?.shipping_details?.shipping_cost}</p>
                        <p>Shipping Note:{eachAuction?.shipping_details?.shipping_note}</p>
                        <p>Shipping Type: {eachAuction?.shipping_details?.shipping_type}</p>
                    </div>
                    <div>
                        <p>Auction ID: {eachAuction?.bid_details?.auction_id}</p>
                        <p>Opening BID Amount: {eachAuction?.bid_details?.opening_bid_amount}</p>
                        {
                           eachAuction?.bid_details?.started_at && <p>Started AT: {eachAuction?.bid_details?.started_at}</p>
                        }
                        {
                            eachAuction?.bid_details?.closed_at && <p>Closed AT: {eachAuction?.bid_details?.closed_at}</p>
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default EachAuctionPage;