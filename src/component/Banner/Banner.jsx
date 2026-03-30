import React from 'react';
import bannerImg from '../../../img-assets/banner.png'
import playBtn from '../../../img-assets/Play.png'
import aiImage from '../../../img-assets/ai.png'

const Banner = () => {
  return (
    <div className='flex justify-between items-center max-w-7xl m-auto mt-20'>
      <div className='banner-start space-y-6'>
        <button className='rounded-full px-6 py-2 font-medium bg-gradient-to-r from-[#d2cdf7] to-[#E1E7FF] flex gap-2'>
          <img src={aiImage} alt="" className='w-6 h-6'/>
          <span className=' text-purple-600'>
          New: AI-Powered Tools Available</span></button>
        <h1 className='font-extrabold text-6xl'>Supercharge Your <br />Digital Workflow</h1>
        <p >
             Access premium AI tools, design assets, templates, and productivity <br />   software—all in one place. Start creating faster today. <br />Explore Products 
        </p>
      
      <div className='flex items-center gap-4'>

        <button className='btn rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white p-6 font-bold'>Explore Products</button>

        <button className='btn rounded-full p-6 border border-purple-500 text-purple-500 font-bold'><img src={playBtn} alt="" />Watch Demo</button>

      </div>
      </div>
        
      <div className='banner-end'>
          <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;