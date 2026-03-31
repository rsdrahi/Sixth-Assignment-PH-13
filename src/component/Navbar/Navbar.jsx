import { ShoppingCart } from 'lucide-react';
import React from 'react';

const Navbar = ({carts}) => {
  return (
      <nav className='flex flex-col md:flex-row justify-between items-center max-w-7xl m-auto mt-8'>
        <h3 className='text-3xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA]  bg-clip-text text-transparent'>DigiTools</h3>
        <div>
          <ul className='flex flex-col md:flex-row gap-8 font-semibold text-[#101727]'>
            <li><a href="">Products</a></li>
            <li><a href="">Features</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Testimonials</a></li>
            <li><a href="">FAQ</a></li>
          </ul>
          </div>
          <div className='flex flex-col md:flex-row gap-5 items-center'>
            
        <div className='relative'>
          <ShoppingCart></ShoppingCart>
          {
            carts.length > 0 && (
              <span className='absolute -top-2 -right-4 bg-red-500 rounded-full px-2 text-white'>{carts.length}</span>
            )
          }
        </div>

        <h3 className='font-semibold text-[#101727]'>
          <a href="">Login</a></h3>
            <button className='btn btn-ghost rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white '>Get Started</button>
          </div>
      </nav>
  );
};

export default Navbar;