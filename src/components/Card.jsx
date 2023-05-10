import React, { useContext } from 'react';
import {ShopContext} from '../context/ShopContext';
function Card({ id, title, price, description, image }) {
  const maxDescriptionLength = 100;

  const {addToCart} = useContext(ShopContext);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description.length > maxDescriptionLength
            ? description.slice(0, maxDescriptionLength) + '...'
            : description}
        </p>
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        <p className="text-gray-600 font-bold text-xl">${price.toFixed(2)}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={() => addToCart(id)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Card;
