import React from 'react';
import instagramImage from '../../../img-assets/Instagram.png'
import facebookImage from '../../../img-assets/Facebook.png'
import twitterImage from '../../../img-assets/Twitter.png'


const Footer = () => {
  return (
    <div className='bg-[#101727] text-white px-22 py-24'>
       <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-20 '>
      <div className='space-y-4'>
        <h4 className='font-bold text-2xl'>DigiTools</h4>
        <p className='text-xs opacity-60'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
      </div>
      <div className='space-y-4'>
        <h5>Product</h5>
        <ul className='space-y-4 opacity-60'>
          <li><a href="" className='hover:underline'>Features</a></li>
          <li><a href="" className='hover:underline'>Pricing</a></li>
          <li><a href="" className='hover:underline'>Templates</a></li>
          <li><a href="" className='hover:underline'>Integrations</a></li>
        </ul>
      </div>
      <div className='space-y-4'>
        <h5>Company</h5>
        <ul className='space-y-4 opacity-60'>
          <li><a href="" className='hover:underline'>About</a></li>
          <li><a href="" className='hover:underline'>Blog</a></li>
          <li><a href="" className='hover:underline'>Careers</a></li>
          <li><a href="" className='hover:underline'>Press</a></li>
        </ul>
      </div>
      <div className='space-y-4'>
        <h5>Resources</h5>
        <ul className='space-y-4 opacity-60'>
          <li><a href="" className='hover:underline'>Documentation</a></li>
          <li><a href="" className='hover:underline'>Help Center</a></li>
          <li><a href="" className='hover:underline'>Community</a></li>
          <li><a href="" className='hover:underline'>Contact</a></li>
        </ul>
      </div>
      <div className='space-y-4'>
        <h5>Social Links</h5>
        <div className='flex gap-3 cursor-pointer'>
          <img src={instagramImage} alt="" />
          <img src={facebookImage} alt="" />
          <img src={twitterImage} alt="" />
        </div>
      </div>
      </div>
      <hr className='mt-18 opacity-30' />
      <div className='flex justify-between mt-10'>
        <p >© 2026 Digitools. All rights reserved.</p>
      <div className='flex gap-8'>
        <p><a href=""className='hover:underline'>Privacy Policy</a></p>
        <p><a href="" className='hover:underline'>Terms of Service</a></p>
        <p><a href="" className='hover:underline'>Cookies</a></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;