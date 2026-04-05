import React from 'react';
import appError from '../assets/App-Error.png'

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center gap-5 m-12 p-8'>
            <img src={appError} alt="App Error" />
            <h2 className='font-bold text-3xl'>OPPS!! APP NOT FOUND</h2>
            <p className='text-neutral-400'>The App you are requesting is not found on our system. Please try another time</p>
            <button className='btn bg-gradient px-8'>Go Back </button>
        </div>
    );
};

export default ErrorPage;