import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Catalog from './pages/Catalog';

import "bootstrap/dist/css/bootstrap.min.css";
import About from './pages/About';
import ShoppingList from './pages/ShoppingList'
import Home from './pages/Home';
import Admin from './pages/Admin';
import GlobalProvider from './context/GlobalProvider';

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className="App">
        <Navbar></Navbar>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/about' element={<About />} />
          <Route path='/shoppinglist' element={<ShoppingList />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>

        <Footer></Footer>
        </div>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;

// QuantityPicker
