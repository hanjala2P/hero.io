import React from 'react';
import logo from '../assets/logo.png'

const Loader = () => {
    return (
        <div className='fallback-container'>
            <img className="spinning-logo"  src={logo} alt="Loading logo" />
            <p>Data is Loading please wait a moment...</p>
        </div>
    );
};

export default Loader;