import React from 'react';
import instagramImage from '../../../img-assets/Instagram.png'
import facebookImage from '../../../img-assets/Facebook.png'
import twitterImage from '../../../img-assets/Twitter.png'


const Footer = () => {
  return (
    <div className='bg-[#101727] text-white px-22 py-24'>
       <div className='grid grid-cols-5 gap-20 '>
      <div className='space-y-4'>
        <h4 className='font-bold text-2xl'>DigiTools</h4>
        <p className='text-xs opacity-60'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
      </div>
      <div className='space-y-4'>
        <h5>Product</h5>
        <ul className='space-y-4 opacity-60'>
          <li>Features</li>
          <li>Pricing</li>
          <li>Templates</li>
          <li>Integrations</li>
        </ul>
      </div>
      <div className='space-y-4'>
        <h5>Company</h5>
        <ul className='space-y-4 opacity-60'>
          <li>About</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>Press</li>
        </ul>
      </div>
      <div className='space-y-4'>
        <h5>Resources</h5>
        <ul className='space-y-4 opacity-60'>
          <li>Documentation</li>
          <li>Help Center</li>
          <li>Community</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className='space-y-4'>
        <h5>Social Links</h5>
        <div className='flex gap-3'>
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
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Cookies</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;