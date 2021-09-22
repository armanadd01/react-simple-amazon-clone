import React from 'react';
import logo from '../../images/logo.png';
import './Headers.css'

const Headers = () => {
    return (
        <div className="header">
            <img src={logo} />
            <h1>This is header</h1>
        </div>
    );
};

export default Headers;