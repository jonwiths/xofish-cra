import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Homepage from './pages/Homepage/index';
import AboutUsPage from './pages/AboutUsPage';
import FishPage from './pages/FishPage';
import ServicesPage from './pages/ServicesPage';
import ShopPage from './pages/ShopPage';
import ContactUsPage from './pages/ContactUsPage';

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/fish" element={<FishPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
