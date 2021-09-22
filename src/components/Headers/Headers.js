import React from 'react';
import logo from '../../images/logo.png';
import './Headers.css'

const Headers = () => {
    return (
        <div className="header">
            <img src={logo} />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/orders">Order</a>
                <a href="/inventory">Inventory</a>
            </nav>
        </div>
    );
};

export default Headers;