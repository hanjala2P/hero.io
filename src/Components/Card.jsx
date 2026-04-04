import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar,FaDownload } from "react-icons/fa";
import { Link } from 'react-router';

const Card = ({item}) => {
    return (
       <Link to={`/appDetails/${item.id}`}>
        <div className='flex flex-col gap-2 p-4 bg-base-100 shadow-sm rounded-sm'>
            
            <img className='h-65 rounded-sm' src={item.image} alt="Image not found" />

            <p className='font-medium text[20px]'>{item.title}</p>
            
            <div className='flex justify-between items-center'>
                <button className='flex btn bg-[#F1F5E8] px-6'> <FaDownload  className='text-green-500'/> Download</button>
                <button className='btn px-6 bg-[#FFF0E1]'><FaStar className='text-amber-600'/> <span>{item.ratings.length}</span> </button>
            </div>

        </div>
       </Link>
    );
};

export default Card;