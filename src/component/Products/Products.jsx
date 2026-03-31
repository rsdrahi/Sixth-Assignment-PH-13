import React, { use } from 'react';
import ProductCard from './ProductCard';

const Products = ({ productsPromise }) => {
  
  const products = use(productsPromise)
  console.log(products);

  return (
    <div className='max-w-7xl m-auto '>
      
      <div className='text-center space-y-6'>
        <h2 className='font-bold text-5xl'>Premium Digital Tools</h2>
      <p>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
      </div>
      
         <div className='grid grid-cols-3 mt-16 gap-8'>
        {
          products.map(product => <ProductCard
            key={product.id}
            product={product}></ProductCard>)
        }
      </div>

    </div>
  );
};

export default Products;