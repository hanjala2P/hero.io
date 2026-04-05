import React, { useState } from "react";
import { loadIstalledApps, removeFromIstalledApps } from "../Utils/LocalStorage"; // Uninstall এর জন্য ফাংশনটি আনুন
import formatNumber from "../Utils/formateNumbers";
import { FaDownload, FaStar } from "react-icons/fa";

const Installation = () => {
  const [installing, setInstalling] = useState(() => loadIstalledApps());
  const [sortOrder, setSortOrder] = useState("none");


  const sortedItems = [...installing].sort((a, b) => {
    if (sortOrder === "price-asc") {
      return a.size - b.size; 
    } else if (sortOrder === "price-des") {
      return b.size - a.size; 
    }
    return 0; 
  });

 
  const handleUninstall = (id) => {
    removeFromIstalledApps(id); 
    const remainingApps = loadIstalledApps(); 
    setInstalling(remainingApps); // 
  };

  if (!installing.length) {
    return <div className="text-center my-10 font-bold text-xl">No Installed Apps Found!</div>;
  }

  return (
    <div className="flex flex-col gap-9 my-12 mx-[20px] md:mx-[40px]">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Your Installed Apps</h2>
        <p className="text-neutral-500 text-[18px] md:text-[20px]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold">{installing.length} Apps Found</h2>
          <select 
            className='select select-bordered' 
            value={sortOrder} 
            onChange={e => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by size</option>
            <option value="price-asc">Size: Low to High</option>
            <option value="price-des">Size: High to Low</option>
          </select>
        </div>

        <div>
        
          {sortedItems.map(app => (
            <div key={app.id} className="flex flex-col md:flex-row items-center justify-between gap-4 my-5 p-4 bg-base-100 rounded-lg shadow-sm">
              <div className="flex gap-4 items-center w-full md:w-auto">
                <img src={app.image} alt={app.title} className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] object-cover rounded-lg"/> 
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold">{app.title}</h3>
                  <div className="flex flex-wrap gap-3 md:gap-4 text-sm">
                    <p className="flex gap-1 items-center text-green-600"><FaDownload /> {formatNumber(app.downloads)}</p>
                    <p className='text-orange-500 flex gap-1 items-center'><FaStar /> {app.ratingAvg}</p>
                    <p className="text-neutral-500 font-semibold">{app.size} MB</p>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => handleUninstall(app.id)}
                className="btn  text-white btn-success  btn-sm md:btn-md w-full md:w-auto"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installation;