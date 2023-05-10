import React, { useState, useEffect, useContext } from 'react';
import Card from '../../components/Card';
import {ShopContext} from '../../context/ShopContext';


function Shop() {
  
  const { products } = useContext(ShopContext);

  return (
    <div className="flex mt-4 flex-row flex-wrap justify-center gap-4">
      {products.map(product => (
        <div key={product.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <Card
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            image={product.image}
          />
        </div>
      ))}
    </div>
  );
}

export default Shop;
