import React from 'react';
import Cards from './Cards';

const TrendingApp = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold text-center mt-10 mb-6'>Trending Apps</h2>
            <p className='text-center text-neutral-500'>Explore All Trending Apps on the Market developed by us</p>
            <div>
                <Cards></Cards>
            </div>
        </div>
    );
};

export default TrendingApp;