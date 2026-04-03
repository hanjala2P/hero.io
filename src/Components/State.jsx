import React from 'react';

const State = () => {
    return (
        <div>
            <section className="bg-gradient py-16 px-4 text-white">
  <div className="max-w-[1140px] mx-auto text-center">
    <h2 className="text-3xl md:text-5xl font-bold mb-12">Trusted By Millions, Built For You</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Item 1 */}
      <div>
        <p className="text-sm opacity-80 mb-2">Total Downloads</p>
        <h3 className="text-5xl font-bold mb-2">29.6M</h3>
        <p className="text-xs opacity-70">21% More Than Last Month</p>
      </div>

      {/* Item 2 */}
      <div>
        <p className="text-sm opacity-80 mb-2">Total Reviews</p>
        <h3 className="text-5xl font-bold mb-2">906K</h3>
        <p className="text-xs opacity-70">46% More Than Last Month</p>
      </div>

      {/* Item 3 */}
      <div>
        <p className="text-sm opacity-80 mb-2">Active Apps</p>
        <h3 className="text-5xl font-bold mb-2">132+</h3>
        <p className="text-xs opacity-70">31 More Will Launch</p>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default State;