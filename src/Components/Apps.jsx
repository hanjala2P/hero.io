import React, { useState } from 'react';
import useCards from '../Hooks/hook';
import Card from './Card';
import NotFound from '../Not found/ErrorPage'

const Apps = () => {
    const { card } =useCards();
    const [search,setSearch]= useState('');
   
       const term = search?.trim()?.toLocaleLowerCase();
   
       const searchApps = term? card?.filter(card => card.title.toLocaleLowerCase().includes(term)):card;
    return (
        <div className='flex flex-col px-4 my-20 gap-8 '>
           <div className='flex flex-col text-center gap-4'>
            <h2 className='text-6xl font-bold'>Our All Applications</h2>
            <p className='text-neutral-400'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div> 

           <div className='flex items-center justify-between px-4'>
            <p className='text-lg font-bold'>({card.length}) Apps Found</p>
               <label>
                <input
                value={search}
                 onChange={e=>{setSearch(e.target.value)}}
                  placeholder='Search' className=" input"></input>
            </label>
           </div>
          <div>
                {searchApps.length > 0 ? (
                    // যদি ডেটা থাকে তবে গ্রিড দেখাবে
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4'>
                        {searchApps.map((item, index) => (
                            <Card key={item.id || index} item={item}></Card>
                        ))}
                    </div>
                ) : (
                    // যদি সার্চে কিছু না পায় তবে আপনার সেই কম্পোনেন্টটি দেখাবে
                    <NotFound />
                )}
            </div>

          <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6  px-4'>
                {
                    searchApps?.map((item, index) => 
                       <Card key={index} item={item}></Card>
                    )
                }
               
            </div>
            
        </div>

    );
};

export default Apps;