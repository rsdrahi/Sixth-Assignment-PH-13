import React from 'react';

const CartPrice = ({ cart, handleDeleteCart }) => {
  // console.log(cart)


  return (
    <div className='shadow rounded-lg p-6 space-y-2 mb-6 flex justify-between items-center'>
      <div className='flex items-center gap-4'>
        <img src={cart.icon} alt="" />
      <div className='space-y-4'>
        <h3 className='font-bold text-xl'>{cart.name}</h3>
      <p>${cart.price}</p>
      </div>
      </div>

        <button onClick={() => handleDeleteCart(cart.id)}
        className='btn btn-outline rounded-lg hover:bg-red-400 hover:text-white text-red-500 font-bold'>Remove</button>
      
    </div>
  );
};

export default CartPrice;