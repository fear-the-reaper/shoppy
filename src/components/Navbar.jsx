import { ShoppingCart } from 'phosphor-react';
import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {ShopContext} from '../context/ShopContext';
function Navbar() {
  const {total} = useContext(ShopContext);
  return (
    <nav className="bg-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-4 mx-auto h-16">
            <Link to="/" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Shop
            </Link>
            <Link to="/cart" className='flex text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                <ShoppingCart size={32}></ShoppingCart> {total}
            </Link>


        </div>
      </div>
    </nav>
  );
}

export default Navbar;
