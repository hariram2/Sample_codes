import './App.css';
import Home from './pages/Home';
import Nav from './pages/Nav';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import ShopDetails from './pages/ShopDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
   
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/shop" exact element={<Shop />}/>
          <Route path="/shop/:id" element={<ShopDetails />}/>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
