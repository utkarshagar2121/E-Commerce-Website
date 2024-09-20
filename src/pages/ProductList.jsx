import React from 'react';
import { ChevronDown } from 'lucide-react';

const products = [
  { id: 1, name: 'Diamond Crystal Ring', price: 5000, discount: 50, image: '/photos/product2.png' },
  { id: 2, name: 'Sapphire Crystal Ring', price: 3000, discount: 50, image: '/photos/product3.png' },
  { id: 3, name: 'Pearl Necklace', price: 3000, discount: 50, image: '/photos/product4.png' },
  { id: 4, name: 'Diamond Ring Set', price: 5000, discount: 50, image: '/photos/product1.png' },
  { id: 5, name: 'Gold Bracelet', price: 3000, discount: 50, image: '/photos/product6.png' },
  { id: 6, name: 'Silver Earrings', price: 3000, discount: 50, image: '/photos/product7.png' },
  { id: 7, name: 'Ruby Ring', price: 5000, discount: 50, image: '/photos/product8.png' },
  { id: 8, name: 'Pearl Earrings', price: 3000, discount: 50, image: '/photos/product9.png' },
  { id: 9, name: 'Gold Hoop Earrings', price: 3000, discount: 50, image: '/photos/product10.png' },
  { id: 10, name: 'Gold Hoop Earrings', price: 3000, discount: 50, image: '/photos/product11.png' },
  { id: 11, name: 'Gold Hoop Earrings', price: 3000, discount: 50, image: '/photos/product12.png' },
  { id: 12, name: 'Gold Hoop Earrings', price: 3000, discount: 50, image: '/photos/product13.png' },
];

const featuredProducts = [
  { id: 1, name: 'Diamond Crystal Ring', price: 3100, discount: 50, image: '/api/placeholder/300/300' },
  { id: 2, name: 'Diamond Crystal Ring', price: 3100, discount: 50, image: '/api/placeholder/300/300' },
  { id: 3, name: 'Diamond Crystal Ring', price: 3100, discount: 50, image: '/api/placeholder/300/300' },
  { id: 4, name: 'Diamond Crystal Ring', price: 3100, discount: 50, image: '/api/placeholder/300/300' },
];

const ProductList = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="relative h-64 mb-8">
        <img src="/photos/productlist1.png" alt="Header" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-8">
          <h1 className="text-white text-4xl font-bold mb-2">New Arrival</h1>
          <h2 className="text-white text-2xl mb-4">Shop Chain</h2>
          <p className="text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <button className="bg-white text-black px-4 py-2 rounded">Shop Now</button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4">
          <h3 className="font-bold text-lg mb-4">Categories</h3>
          <ul className="space-y-2">
            <li>Bracelets</li>
            <li>Earrings</li>
            <li>Necklaces</li>
            <li>Pendants</li>
            <li>Wedding Special</li>
          </ul>

          <h3 className="font-bold text-lg mt-8 mb-4">Price</h3>
          <input type="range" min="0" max="100" className="w-full" />

          <h3 className="font-bold text-lg mt-8 mb-4">Feature Products</h3>
          <div className="space-y-4">
            {featuredProducts.map((product) => (
              <div key={product.id} className="flex items-center space-x-2">
                <img src={product.image} alt={product.name} className="w-16 h-16 object-cover" />
                <div>
                  <p className="font-semibold">{product.name}</p>
                  <p className="text-sm">
                    <span className="text-gray-500 line-through">₹{product.price}</span>{' '}
                    <span className="text-black">₹{product.price * (1 - product.discount / 100)}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-4">
            <p>Showing 1–9 of 22 results</p>
            <div className="flex items-center space-x-2">
              <button className="border px-2 py-1 rounded flex items-center">
                Default sorting <ChevronDown className="ml-1" size={16} />
              </button>
              <button className="border px-2 py-1 rounded">☰</button>
              <button className="border px-2 py-1 rounded">☷</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="border rounded-lg overflow-hidden">
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  {product.discount > 0 && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">Sale!</span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <p className="text-sm">
                    <span className="text-gray-500 line-through">₹{product.price}</span>{' '}
                    <span className="text-black">₹{product.price * (1 - product.discount / 100)}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;