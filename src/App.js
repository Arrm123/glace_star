import './App.css';
import Header from './components/header/Header';
import {Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import SweetStuff from './components/sweetStuff/SweetStuff';
import DriedFruits from './components/driedFruits/DriedFruits';
import Cookies from './components/cookies/Cookies';
import OreshkiWithCream from './components/oreshkiWithCream/OreshkiWithCream';
import CreateOrder from './components/createOrder/CreateOrder';


function App() {
  return (
    <div className="App">
    <Header />
    <Routes>
       <Route path="glace_star" exact element={<Home/>}/>
       <Route path="/about"  />
       <Route path="/categories/sweetstuff"  element={<SweetStuff/>}/>
       <Route path="/categories/dried-fruits" element={ <DriedFruits/>}/>
       <Route path="/categories/cookies" element={<Cookies/>}/>
       <Route path="/categories/oreshki" element={<OreshkiWithCream/>}/>
       <Route path="/categories/:path/order" element={<CreateOrder/>}/>
    </Routes>
    </div>
  );
}

export default App;
