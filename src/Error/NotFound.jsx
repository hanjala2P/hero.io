import React from 'react';
import error404 from '../assets/error-404.png'

const NotFound = () => {
    return (
        <div>
              <img src={error404} alt="404 Error" />
                        <h2>Oops, page not found!</h2>
                        <p>The page you are looking for is not available.</p>
                        <button className='btn bg-gradient px-8'>Go Back </button>
        </div>
    );
};

export default NotFound;  