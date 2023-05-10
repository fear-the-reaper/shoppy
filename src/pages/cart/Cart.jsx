import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext';

function Cart() {

  const {cart, totalPrice, removeFromCart, addToCart, clearCart} = useContext(ShopContext)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-medium mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b border-gray-300 pb-4"
            >
              <div>

                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-700 py-2">{item.description}</p>
                <p className="text-black">${item.price}</p>
              </div>
              <div className="flex items-center p-2 gap-2">
                <button
                  className="text-red-500"
                  onClick={() => removeFromCart(item.id)}
                >
                  -
                </button>
                <span className='font-medium'>{item.count}</span>
                <button
                  className="text-green-500"
                  onClick={() => addToCart(item.id)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center pt-4">
            <button
              className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300"
              onClick={clearCart}
            >
              Clear Cart
            </button>
            <div className="text-lg font-bold">${totalPrice}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart