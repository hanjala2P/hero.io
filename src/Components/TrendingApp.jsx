import React from 'react';
import Cards from './Cards';
import { Link } from 'react-router';

const TrendingApp = () => {
    return (
        <div className='flex flex-col items-center gap-6 py-10 px-2'>
            <h2 className='text-3xl font-bold text-center mt-10 mb-6'>Trending Apps</h2>
            <p className='text-center text-neutral-500'>Explore All Trending Apps on the Market developed by us</p>
            <div>
                <Cards></Cards>
            </div>
            <Link to='/apps'> <button className='bg-gradient font-medium py-2 px-16 rounded'> Show All </button></Link>
        </div>
    );
};

export default TrendingApp;