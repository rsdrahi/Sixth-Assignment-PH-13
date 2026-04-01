import React, { useState } from 'react';
import ProductFeature from './ProductFeature';
import { toast } from 'react-toastify';

const ProductCard = ({ product, carts, setCarts }) => {

  const [isBuyNow, setBuyNow] = useState(false);
  const handleBuyButton = () => {
    setBuyNow(true),
    setCarts([...carts, product])
    toast.success("Added to Cart")
  }


  const { name, description, price, features, tag,  tagType, icon } = product;

  return (

    <div className='rounded-lg border-gray-500 shadow gap-6 p-6 space-y-6 py-12 '>
      
      <div className='flex justify-between items-center'>
        <img src={icon} alt="" />

      <div className={`rounded-full font-medium p-2 text-center w-28 
        ${
        tagType === 'best-seller' ? 'bg-amber-200 text-amber-700' :
        tagType === 'popular' ? 'bg-purple-200 text-purple-700' :
          'bg-green-200 text-green-700'
        }`}>
          {tag}
         </div>
      </div>

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


      <button onClick={handleBuyButton} className='btn w-full rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white'>{
        isBuyNow ? "Added": "Buy Now" 
      }</button>


    </div>
  );
};

export default ProductCard;