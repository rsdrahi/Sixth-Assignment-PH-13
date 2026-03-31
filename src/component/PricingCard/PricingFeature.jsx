import { Check } from 'lucide-react';
import React from 'react';

const PricingFeature = ({ feature, is_popular }) => {
  
  return (
    <p className='flex gap-2'>
      <Check className={`${is_popular ? 'text-white': 'text-green-500' }`}></Check>
      <span className={`${is_popular ? 'text-white': 'text-[#627382]'}`}>{feature}</span>
    </p>
  );
};

export default PricingFeature;