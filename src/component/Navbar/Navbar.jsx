import { ShoppingCart } from 'lucide-react';
import React from 'react';

const Navbar = () => {
  return (
      <nav className='md:flex justify-between items-center max-w-7xl m-auto'>
        <h3 className='text-3xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA]  bg-clip-text text-transparent'>DigiTools</h3>
        <div>
          <ul className='md:flex gap-8 font-semibold text-[#101727]'>
            <li>Products</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>FAQ</li>
          </ul>
          </div>
          <div className='md:flex gap-5 items-center'>
            <ShoppingCart></ShoppingCart>
            <h3 className='font-semibold text-[#101727]'>Login</h3>
            <button className='btn rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white'>Get Started</button>
          </div>
      </nav>
  );
};

export default Navbar;