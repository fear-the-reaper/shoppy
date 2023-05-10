import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ShopContextProvider from './context/ShopContext';
import Cart from './pages/cart/Cart';
import Shop from './pages/shop/Shop';
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Shop></Shop>}></Route>
            <Route path='/cart' element={<Cart></Cart>}></Route>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
