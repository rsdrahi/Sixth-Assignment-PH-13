import React from 'react';

const Rating = () => {
  return (
    <div className='md:flex justify-around bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-8 items-center text-white mt-16 text-center mb-16'>
      <div className='space-y-2'>
        <h3 className='font-extrabold text-6xl'>50K+</h3>
        <p className='font-medium'>Active Users</p>
      </div>
      <div className='space-y-2'>
        <h3 className='font-extrabold text-6xl'>200+</h3>
        <p className='font-medium'>Premium Tools</p>
      </div>
      <div className='space-y-2'>
        <h3 className='font-extrabold text-6xl'>4.9</h3>
        <p className='font-medium'>Rating</p>
      </div>
    </div>
  );
};

export default Rating;