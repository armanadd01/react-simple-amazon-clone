import React, { useEffect, useState } from 'react';
import './Shops.css'

const Shops = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    return (
        <div className="shop-container">
            <div className="product-container">
                <h3>Total Products: {products.length} </h3>
            </div>
            <div className="cart-container">
                <h3>this is cart section</h3>
            </div>
            
        </div>
    );
};

export default Shops;