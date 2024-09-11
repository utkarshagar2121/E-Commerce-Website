import React from 'react';

const PromotionGrid = () => {
  return (
    <div className="w-full bg-white py-9">
      <div className="max-w-[1440px] mx-auto px-9">
        <div className="grid grid-cols-6 grid-rows-2 gap-4 h-[600px]">
          <div className="col-span-2 row-span-2 relative rounded-l-lg bg-cover bg-center transition-transform duration-300 hover:scale-105" 
            style={{
              backgroundImage: 'url("/photos/Promotion-1.png")',
            }}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-50"></div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-amber-900 text-center">
              <h2 className="text-2xl font-light text-black">NEW ARRIVAL</h2>
              <p className="text-7xl">10%</p>
              <p className='text-black'>OFF</p>
            </div>
          </div>

          {/* Shop Bracelets */}
          <div className="col-span-2 relative overflow-hidden rounded-tr-lg bg-cover bg-center transition-transform duration-300 hover:scale-105"
            style={{
              backgroundImage: 'url("/photos/Promotion-2.png")',
            }}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-50"></div>
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-black text-center">
              <p className="text-xl font-semibold">SHOP BRACELETS</p>
            </div>
          </div>

          <div className="col-span-2 row-span-2 relative overflow-hidden rounded-br-lg bg-cover bg-center transition-transform duration-300 hover:scale-105" 
            style={{
              backgroundImage: 'url("/photos/Promotion-5.png")',
            }}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-50"></div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-amber-900 text-center">
              <h2 className="text-2xl font-light text-black">UPTO</h2>
              <p className="text-7xl">30%</p>
              <p className='text-black'>OFF</p>
            </div>
          </div>

          {/* Shop Earing */}
          <div className="col-span-1 row-span-1 relative overflow-hidden bg-cover bg-center transition-transform duration-300 hover:scale-105"
            style={{
              backgroundImage: 'url("/photos/Promotion-3.png")',
            }}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-50"></div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-black text-center">
              <p className="text-lg font-semibold">SHOP <br /> EARING</p>
            </div>
          </div>

          {/* Shop Locket */}
          <div className="col-span-1 row-span-1 relative overflow-hidden bg-cover bg-center transition-transform duration-300 hover:scale-105"
            style={{
              backgroundImage: 'url("/photos/Promotion-4.png")',
            }}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-50"></div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-black text-center">
              <p className="text-lg font-semibold">SHOP <br />LOCKET</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionGrid;
