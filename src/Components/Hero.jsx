import React from 'react';
import { FaGooglePlay, FaApple } from "react-icons/fa";
import appStore from '../assets/appleStore.png'
import playStore from '../assets//playStore.png'
import heroImg from '../assets/hero.png'
const Hero = () => {
    return (
        <div className=''>
         <div className='flex flex-col items-center text-center mx-auto gap-6 px-4 mt-[80px] md:mt-[80px]'>
   
    <h1 className='wrap text-6xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-[600px]'> 
        We Build <span className='text-gradient'>Productive</span> Apps
    </h1>

   
    <p className='text-neutral-500 text-base md:text-[20px] max-w-[900px]'>
        At HERO.IO, we craft innovative apps designed to make everyday life simpler, 
        smarter, and more exciting. Our goal is to turn your ideas into digital 
        experiences that truly make an impact.
    </p>

   
    <div className='flex flex-col items-center sm:flex-row gap-4 md:gap-8 mt-4 w-full sm:w-auto'>
        <button className='btn border-neutral-300 p-6 font-semibold text-[20px] rounded-sm'><img src={playStore} alt="Google Play" />Google Play</button>
        <button className='btn border-neutral-300 p-6 font-semibold text-[20px] rounded-sm'><img src={appStore} alt="Apple Store" />Apple Store</button>
    </div>
      <img className='mt-[40px]' src={heroImg} alt="Hero Image" />

</div>
        </div>
       
    );
};

export default Hero;