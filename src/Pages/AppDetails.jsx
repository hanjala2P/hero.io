import React, { useState } from "react";
import Info from "./info";
import Ratings from "./Ratings";
import { useParams } from "react-router";
import useCards from "../Hooks/hook";
import Loader from "../Animation/Loader";
import { FaDownload, FaStar, FaThumbsUp } from "react-icons/fa";
import formatNumber from "../Utils/formateNumbers";

const AppDetails = () => {
  const { id } = useParams();
  const { card, loading, error } = useCards();
  
  // Safe find logic
  const singleCard = card?.find((p) => p.id === Number(id));

  if (loading) return <Loader></Loader>;
  
  if (!singleCard) return <div className="text-center my-10">App Not Found!</div>;

  const { title, image, description, size, reviews, ratingAvg, downloads, companyName } = singleCard || {};

  return (

    <div className="px-5 md:px-10 lg:mx-[80px] my-5 md:my-10">
      

<section className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-10 my-10">
  

  <div className="flex-shrink-0">
    <img 
      className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] object-cover rounded-3xl shadow-lg" 
      src={image} 
      alt={title} 
    />
  </div>


  <div className="flex flex-col justify-center gap-4 w-full text-center lg:text-left">
    <div className="pb-4 border-b border-neutral-300">
      <h2 className="font-bold text-[32px] leading-tight">{title}</h2>
      <p className="text-neutral-500 text-[20px] mt-2">
        Developed by{" "}
        <span className="font-semibold text-gradient">{companyName}</span>
      </p>
    </div>

    {/* Stats Area */}
    <div className="py-2">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center lg:items-start">
          <FaDownload className="text-blue-500 mb-1" />
          <span className="state-title">Downloads</span>
          <span className="font-bold stat-value">{formatNumber(downloads)}</span>
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <FaStar className="text-yellow-500 mb-1" />
          <span className="state-title ">Avg Rating</span>
          <span className="font-bold stat-value text-secondary">{formatNumber(ratingAvg)}</span>
        </div>
        <div className="flex flex-col items-center lg:items-start col-span-2 md:col-span-1">
          <FaThumbsUp className="text-green-500 mb-1" />
          <span className="state-title">Reviews</span>
          <span className="font-bold stat-value">{formatNumber(reviews)}</span>
        </div>
      </div>
    </div>

    <div className="mt-2">
      <button className="btn bg-gradient w-full md:w-fit px-8 py-3 font-bold text-white rounded-xl">
        Install Now ({size} MB)
      </button>
    </div>
  </div>
</section>

      <Ratings />

      {/* Description Area */}
      <div className="flex flex-col gap-3 my-10 border-t pt-8">
        <h2 className="font-semibold text-2xl">Description</h2>
        <p className="text-neutral-600 leading-relaxed text-justify md:text-left">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;