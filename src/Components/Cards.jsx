import React from 'react';

const Cards = () => {
    return (
        <div className='flex'>
            <div className='flex flex-col bg-base-100 gap-3 p-4 border rounded-sm shadow-lg border-none'>
                <img className='h-[316px] w-[316px] bg-amber-100 border-none rounded-sm ' src="" alt="" />
                <p className='font-medium'>Forest: Focus for Productivity</p>
                <div className='flex justify-between'>
                    <button className='btn'>9M</button>
                    <button className='btn'>5</button>
                </div>
            </div>
        </div>
    );
};

export default Cards;