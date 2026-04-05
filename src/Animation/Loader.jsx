import React from 'react';

const Loader = () => {
    return (
       <div className="flex flex-col gap-8 justify-center items-center h-64 w-full">
  
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
   <p className=' text-lg text-neutral-600'>Please wait a moment...</p>
  </div>
    );
};

export default Loader;