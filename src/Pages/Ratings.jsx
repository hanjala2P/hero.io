import React, { useEffect, useState } from 'react';

const Ratings = ({ ratingsData = [] }) => {
  const [show, setShow] = useState(false);
  const chartData = ratingsData ? [...ratingsData].reverse() : [];

  const realMax = Math.max(...chartData.map(item => item.count), 0);
  

  const maxValue = realMax > 0 ? Math.ceil(realMax / 1000) * 1000 : 10000;

  
  const scales = [0, 0.25, 0.5, 0.75, 1].map(p => Math.round(maxValue * p));

 
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timer);
  }, [ratingsData]);

  return (
    <div className="w-full bg-[#f8f9fa] p-6 md:p-10 border-t border-b border-gray-200 my-10 font-sans">
      <h2 className="text-xl font-bold text-[#0f172a] mb-8">Ratings</h2>

      <div className="relative">
     
        <div className="space-y-6">
          {chartData.map((item, index) => (
            <div key={index} className="flex items-center">
            
              <div className="w-24 text-sm text-gray-600 font-semibold">
                {item.name}
              </div>

           
              <div className="flex-grow bg-gray-100 h-9 relative rounded-sm">
                <div 
                  className="bg-[#ff8c00] h-full shadow-sm transition-all duration-1000 ease-out"
                  style={{ 
                    width: show ? `${(item.count / maxValue) * 100}%` : '0%' 
                  }}
                >
                
                   <span className="absolute right-2 top-1.5 text-[10px] text-white font-bold opacity-0 hover:opacity-100 transition-opacity">
                      {item.count}
                   </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <div className="mt-8 ml-24 relative border-t border-gray-300 pt-3">
          <div className="flex justify-between w-full">
            {scales.map((val) => (
              <div key={val} className="flex flex-col items-center relative group">
           
                <div className="absolute -top-[13px] w-[1px] h-3 bg-gray-400 group-first:left-0 group-last:right-0"></div>
                <span className="text-[11px] text-gray-500 font-bold uppercase tracking-tighter">
                  {val >= 1000 ? `${(val / 1000).toFixed(val % 1000 === 0 ? 0 : 1)}k` : val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings;