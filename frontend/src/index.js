import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import HomePage from './landing_page/Home/HomePage';
import Signup from "./landing_page/SignUp/Signup";
import AboutPage from "./landing_page/About/AboutPage";
import ProductPage from "./landing_page/Products/ProductsPage";
import PricingPage from "./landing_page/Pricing/PricingPage";
import SupportPage from "./landing_page/Support/SupportPage";

import NotFound from "./landing_page/NotFound";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
