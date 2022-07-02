import './App.css';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Nav from './pages/Nav';
import Contact from './pages/Contact';
import Product from './pages/Product';
import AboutUs from './pages/aboutUs';
import Lodash from './pages/Lodash';
import LodashExample from './pages/LodashExample';
import StateEx from './pages/stateExamaple';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
   
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/shop" exact element={<Shop />}/>
          <Route path="/product" exact element={<Product />}/>
          <Route path="/contact" exact element={<Contact />}/>
          <Route path="/about" exact element={<AboutUs />}/>
          <Route path="/lodash" exact element={<Lodash />}/>
          <Route path="/lodashex" exact element={<LodashExample />}/>
          <Route path="/state" exact element={<StateEx />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
