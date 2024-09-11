import React from 'react';
import { IoDiamondOutline } from "react-icons/io5";

const ph = [
  '/photos/promotion2-1.png',
  '/photos/promotion2-2.png',
  '/photos/promotion2-3.png',
  '/photos/promotion2-4.png',
  '/photos/promotion2-5.png',
  '/photos/promotion2-6.png',
  '/photos/promotion2-2.png',
  '/photos/promotion2-3.png',
  '/photos/promotion2-4.png',
  '/photos/promotion2-5.png',
  '/photos/promotion2-6.png',
];

const Promotion2 = () => {
  console.log(ph); // Confirm paths are correct

  return (
    <>
      {/* Division */}
      <div className="relative my-8 font-garamond">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center mb-2 w-full">
            <div className="flex-grow h-[0.4px] bg-gradient-to-l from-gray-600 to-transparent text-bold"></div>
            <IoDiamondOutline className="text-gray-500 mx-3" />
            <div className="flex-grow h-[1px] bg-gradient-to-r from-gray-600 to-transparent"></div>
          </div>
          <h2 className="text-4xl bg-gradient-to-r from-orange-400 to-orange-900 bg-clip-text text-transparent pb-3">
            Shop By Category
          </h2>
          <p className="text-sm text-orange-900 font-semibold">OUR EVERYDAY PIECES</p>
        </div>
        <a href="#" className="absolute bottom-0 right-5 text-orange-600 hover:underline mt-2">
          VIEW ALL
        </a>
      </div>

      {/* Cards */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex w-full">
          {ph.map(src => (
            <div
              key={src}
              className="flex-shrink-0 w-[200px] h-[400px] rounded-lg ml-2 bg-cover bg-no-repeat bg-center border border-gray-300" // Added border for debugging
              style={{ backgroundImage: `url(${src})`, backgroundColor: 'gray' }} // Temporary background color
            >
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Promotion2;
