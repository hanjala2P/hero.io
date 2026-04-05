import React from 'react';
import error404 from '../assets/error-404.png'

const NotFound = () => {
    return (
        <div className='flex flex-col items-center gap-1 my-12 p-8'>
              <img src={error404} alt="404 Error" />
                        <h2 className='font-bold text-3xl'>Oops, page not found!</h2>
                        <p className='text-neutral-400 my-2'>The page you are looking for is not available.</p>
                        <button className='btn bg-gradient px-8'>Go Back </button>
        </div>
    );
};

export default NotFound;  