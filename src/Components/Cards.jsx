import React from 'react';
import useCards from '../Hooks/hook';
import Card from './Card';

const Cards = () => {
    const { card } =useCards();
    const featuredCards =card.slice(0,8);
    return (
        <div  className=''>
            <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 px-4'>
                {
                    featuredCards.map((item, index) => 
                       <Card key={index} item={item}></Card>
                    )
                }
               
            </div>
                
        </div>
    );
};

export default Cards;