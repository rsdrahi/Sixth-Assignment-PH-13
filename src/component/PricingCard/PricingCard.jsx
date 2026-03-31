import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({ pricing }) => {
  const { name, description, price, features, cta_text, billing_cycle, badge, is_popular } = pricing; 
  return (
    <div className='flex flex-col relative'>
      {
        is_popular && (
          <div className='absolute left-34 top-6'>
            <span className='bg-[#FEF3C6] px-6 py-2 rounded-full text-[#BB4D00] font-medium'>{badge}</span>
          </div>
        )
      }
      {/* card header */}

      <div className={`flex-1 bg-[#F9FAFC] rounded-2xl p-6 shadow mt-8 mb-24 
        ${is_popular ?
          'bg-gradient-to-r from-[#4F39F6] to-[#9514FA]': 
          'bg-[#F9FAFC]' }`}>
      
        <h3 className={`font-bold text-2xl ${is_popular ? 'text-white': 'text-black'}`}>{name}</h3>
        <p className={`${is_popular ? 'text-white' : 'text-[#627382]'}`}>{description}</p>
        <p className={`font-bold text-3xl mt-4 mb-4 ${is_popular ? 'text-white': 'text-black'}`}>${price}
          <span className={`text-xl text-[#627382] ${is_popular ? 'text-white': 'text-[#627382]'}`}>/{billing_cycle}</span>
        </p>


         {/* card body */}
      <div className='space-y-4'>
        {
          features.map((feature, index) => <PricingFeature
            key={index}
            feature={feature} is_popular={is_popular}></PricingFeature>)
          }
        </div>
        <button
          className={`btn w-full my-4 rounded-full p-6 font-medium
          ${is_popular ?
            'bg-white text-[#9514FA]' :
            'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white'}
            `}>{cta_text}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;