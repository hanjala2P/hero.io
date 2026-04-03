import React from 'react';
import logo from '../assets/logo.png'
const Footer = () => {
    return (
        <div className='flex flex-col gap-4  py-8 px-6 bg-[#001931] text-base-100'>
          <div className='flex justify-between'>
            <div className='flex items-center gap-3'>
                <img className='h-14' src={logo} alt="Logo" />
            <p className='font-semibold text-2xl'>Hero.io</p>
            </div>
            <div>
                <p>Social Links</p>
                <div className='flex gap-4'>
                    <a href="https://facebook.com/heroio" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com/heroio" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://instagram.com/heroio" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>
          </div>
          <div>
            <p className='text-center'>&copy; 2026 Hero.io. All rights reserved.</p>
          </div>
        </div>
    );
};

export default Footer;