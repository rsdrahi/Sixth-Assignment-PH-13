import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const Pricing = ({ pricingPromise }) => {
  
  const pricingData = use(pricingPromise);
  // console.log(pricingData)

  return (
    <div className='max-w-7xl m-auto'>
      <div className=' text-center space-y-4'>
        <h2 className='text-5xl font-bold'>Simple, Transparent Pricing</h2>
      <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>
      <div className='grid md:grid-cols-3 gap-8'>
        {
          pricingData.map(pricing => <PricingCard
            key={pricing.id}
            pricing={pricing}></PricingCard>)
        }
      </div>
    </div>
  );
};

export default Pricing;