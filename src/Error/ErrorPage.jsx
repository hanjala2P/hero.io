import React from 'react';
import appError from '../assets/App-Error.png'

const ErrorPage = () => {
    return (
        <div>
            <img src={appError} alt="App Error" />
            <h2>OPPS!! APP NOT FOUND</h2>
            <p>The App you are requesting is not found on our system. Please try another time</p>
            <button className='btn bg-gradient px-8'>Go Back </button>
        </div>
    );
};

export default ErrorPage;