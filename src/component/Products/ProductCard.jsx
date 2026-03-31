import React from 'react';
import ProductFeature from './ProductFeature';

const ProductCard = ({ product }) => {
  console.log(product);
  const { name, description, price, features } = product;
  return (
    <div className='rounded-lg border-gray-500 shadow gap-6 p-6 space-y-6'>
      <h4 className='font-bold text-2xl'>{name}</h4>
      <p>{description}</p>
      <p><span className='font-bold text-2xl'>${price}</span>/Mo</p>
      <div>
        {
          features.map((feature, index) => <ProductFeature
            key={index}
            feature={feature}></ProductFeature>)
        }
      </div>
      <button className='btn w-full rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white'>Buy Now</button>
    </div>
  );
};

export default ProductCard;