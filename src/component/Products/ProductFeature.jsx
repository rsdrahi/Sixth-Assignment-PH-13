import { Check } from 'lucide-react';
import React from 'react';

const ProductFeature = ({ feature }) => {
  // console.log(feature)
  return (
    <p className='flex gap-2'>
      <Check className='text-green-500'></Check>
      {feature}</p>
  );
};

export default ProductFeature;