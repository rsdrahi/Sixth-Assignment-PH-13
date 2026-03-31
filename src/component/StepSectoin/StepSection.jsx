import React from 'react';
import user from '../../../img-assets/user.png'
import packageImg from '../../../img-assets/package.png'
import rocketImg from '../../../img-assets/rocket.png'

const StepSection = () => {
  return (
    <div className='bg-[#F9FAFC] mb-12 p-12'>
      <div className='text-center space-y-4 mb-8'>
        <h3 className='text-[#101727] font-extrabold text-4xl'>Get Started in 3 Steps</h3>
        <p className='text-xs text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 max-w-7xl m-auto'>
        <div className='rounded-lg shadow border-rounded p-12 space-y-4 text-center bg-white relative'>
           <div className='bg-purple-600 w-8 h-8 rounded-full flex justify-center items-center text-white absolute top-4 right-2'>1</div>
          <div className='bg-purple-200 w-22 h-22 rounded-full flex items-center justify-center mx-auto'><img src={user} alt="" /></div>
          <h4 className='text-2xl font-bold text-[#101727]'>Create Account</h4>
          <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
        </div>
        <div className='rounded-lg shadow border-rounded p-8 space-y-4 text-center bg-white relative'>
           <div className='bg-purple-600 w-8 h-8 rounded-full flex justify-center items-center text-white absolute top-4 right-2'>2</div>
          <div className='bg-purple-200 w-22 h-22 rounded-full flex items-center justify-center mx-auto'><img src={packageImg} alt="" /></div>
          <h4 className='text-2xl font-bold text-[#101727]'>Choose Products</h4>
          <p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
        </div>
        <div className='rounded-lg shadow border-rounded p-8 space-y-4 text-center bg-white relative'>
          <div className='bg-purple-600 w-8 h-8 rounded-full flex justify-center items-center text-white absolute top-4 right-2'>3</div>
          <div className='bg-purple-200 w-22 h-22 rounded-full flex items-center justify-center mx-auto'><img src={rocketImg} alt=""/></div>
          <h4 className='text-2xl font-bold text-[#101727]'>Start Creating</h4>
          <p className='text-[#627382]'>Download and start using your premium tools immediately.</p>
        </div>
      </div>
    </div>
  );
};

export default StepSection;