import React from 'react';
import useCards from '../Hooks/hook';
import Card from './Card';

const Apps = () => {
    const { card } =useCards();
    return (
        <div className='flex flex-col px-4 my-20 gap-8 '>
           <div className='flex flex-col text-center gap-4'>
            <h2 className='text-6xl font-bold'>Our All Applications</h2>
            <p className='text-neutral-400'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div> 

           <div className='flex items-center justify-between px-4'>
            <p className='text-lg font-bold'>({card.length}) Apps Found</p>
            <input type="text" placeholder="Search Apps..." className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
           </div>

          <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6  px-4'>
                {
                    card.map((item, index) => 
                       <Card key={index} item={item}></Card>
                    )
                }
               
            </div>
        </div>
    );
};

export default Apps;