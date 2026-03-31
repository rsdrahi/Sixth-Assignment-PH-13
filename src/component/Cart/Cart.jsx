import React from 'react';
import CartPrice from './CartPrice';
import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts }) => {
  
  const totalPrice = carts.reduce((sum, cart) => sum + cart.price, 0) 
  // console.log(totalPrice)
  const handleRemoveCart = () => {
    setCarts([]);
    toast.success("Payment successful!")
  }
  const handleDeleteCart = (id) => {
    // console.log(id)
    const filterArray = carts.filter(cart => cart.id !== id)
    // console.log(filterArray)
    setCarts(filterArray);
    toast.error("Item remove from Cart")
  }
  

  return (
    <>
       <div className='text-center space-y-6'>
        <h2 className='font-bold text-5xl'>Premium Digital Tools</h2>
      <p>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
      </div>

       <div className='max-w-7xl m-auto mt-6'>
        <h2 className='font-bold text-2xl'>Your Cart</h2>
        
        {
          carts.length === 0
            ? <p className='text-center font-bold rounded-lg shadow p-16 my-8'>Cart is Empty</p>
           :<div className='p-10 shadow rounded-lg mt-8'>
         {
        carts.map(cart => <CartPrice
          key={cart.id}
          cart={cart}
          handleDeleteCart={handleDeleteCart}
        ></CartPrice>)
          }
          
          <div className='flex justify-between'>
              <div className='font-bold'>Total:</div>
            <div className='font-bold text-2xl'>${totalPrice}</div>
          </div>
          <button onClick={handleRemoveCart}
            className='btn w-full rounded-full p-6 my-4 
          bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white
          '>Proceed to Checkout</button>

        </div>
        }

      
    </div>

    </>
  );
};

export default Cart;