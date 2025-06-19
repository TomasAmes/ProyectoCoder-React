import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Category from './pages/Category';
import Item from './pages/Item';
import NotFound from './pages/NotFound';
import AddDoc from "./pages/AddDoc";
import Checkout from './pages/Checkout';

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/add-doc" element={<AddDoc />} /> 
        <Route path="/checkout" element={<Checkout />} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
