
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import ProductDtls from './pages/Product/ProductDtls';
import Cart from './pages/Cart/Cart';


function App() {
  return (

    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productdetails/:id" element={<ProductDtls />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
