import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Category from './pages/Category';
import Item from './pages/Item';
import NotFound from './pages/NotFound';
import AddDoc from "./pages/AddDoc";
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { CartProvider } from "./context/CartContext";
import { ChakraProvider } from '@chakra-ui/react';


function App() {
  return (
    <ChakraProvider>
      <CartProvider> 
        <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
          <NavBar />
          <div className="mt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:categoryId" element={<Category />} />
              <Route path="/item/:id" element={<Item />} />
              <Route path="/add-doc" element={<AddDoc />} /> 
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} /> 
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </CartProvider>
    </ChakraProvider>
  );
}

export default App;
