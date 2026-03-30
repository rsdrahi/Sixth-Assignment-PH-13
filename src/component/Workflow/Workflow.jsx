import React from 'react';

const Workflow = () => {
  return (
    <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-16  text-center space-y-6'>
      <h2 className='font-extrabold text-4xl text-white'>Ready to Transform Your Workflow?</h2>
      <p className='text-white text-xs'>Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.</p>
      <div className='flex justify-center gap-4'>
        <button className='btn bg-white text-purple-500 rounded-full'>Explore Products</button>
        <button className='btn btn-outline border-white rounded-full text-white hover:bg-white hover:text-[#9514FA]'>View Pricing</button>
      </div>
      <p className='text-white text-xs'>14-day free trial • No credit card required • Cancel anytime</p>
    </div>
  );
};

export default Workflow;