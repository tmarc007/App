import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Catalog from './pages/Catalog';
import About from './pages/About';
import "bootstrap/dist/css/bootstrap.min.css";
import ShoppingList from './pages/ShoppingList'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Catalog />

      <About />
      <ShoppingList />

      <Footer></Footer>
    </div>
  );
}

export default App;

// QuantityPicker
