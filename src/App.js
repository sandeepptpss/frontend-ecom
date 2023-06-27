import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Nav from './components/Navbar';
import Home from './components/Home';
import ProductPage from './components/ProfilePage';
import NoPage from './components/NoPage';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import Product from './components/Product';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ProductDetail from './components/ProductDetail';
import PrivateComponet from './components/PrivateComponet';

function App() {
  return (
  <div className="App">
  <BrowserRouter>
  <Nav />
  <Routes>
  <Route index element={<Home />}/>

  <Route element={<PrivateComponet/>}>
  <Route path="/collections" element={<Product />}/>
  <Route path="add" element={<AddProduct />} />
  <Route path="/collections/update/:id" element={<UpdateProduct />} />
  <Route path="/profile" element={<ProductPage />} />
  <Route path="/products/:id" element={<ProductDetail />} />
  </Route>


  <Route path="/signup" element={<SignUp />} />

  <Route path="/login" element={<Login />} />
  <Route path="*" element={<NoPage />} />
  </Routes>
  </BrowserRouter>
  <Footer />
    </div>
  );
}
export default App;
