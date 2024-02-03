import './app.scss';
import React from "react";
import {
  HashRouter,
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import Home from '../compont/Home/Home';
import Products from '../compont/Products/Products';
import Product from '../compont/Product/Product';
import Navbar from '../compont/Navbar/Navbar';
import Footer from '../compont/Footer/Footer';

const Layout = () =>{
  return(
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/item/:id" element={<Product />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;