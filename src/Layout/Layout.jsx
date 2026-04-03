import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Nav from '../Components/Nav';

const Layout = () => {
    return (
   
        <div className='max-w-[1900px] mx-auto bg-[#F5F5F5] min-h-screen flex flex-col'>
            
             
              <Nav />

              <main className="flex-grow">
                  <Outlet />
              </main>

              <Footer />
              
        </div>
    );
};
export default Layout;