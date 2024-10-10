import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Page/Layout';
import Product from './Page/Product';
import Payment from  './Page/Payment';
import End from './Page/End';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout />}></Route>
    <Route path="/Product" element={<Product />} />
    <Route path="/Payment" element={<Payment />} />
    <Route path='/End' element={<End/>}/>
  </Routes>
  </BrowserRouter>
)