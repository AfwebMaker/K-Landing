import React from 'react';
//react router dom
import { Route, Routes } from 'react-router-dom'; // Navigate,

// components
import Home from '../pages/Home';
import Categories from '../pages/Categories';
import Category from '../pages/Category';
import AboutUs from '../pages/AboutUs';
import Login from '../pages/Login';

const Routers = () => {

    return (
        <Routes>
            <Route path='/login' element={<Login />} />

            <Route path='/' element={<Home />} />
            <Route path='/about_us' element={<AboutUs />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/categories/:slug' element={<Category />} />
            <Route path='*' element={<Home />} />
        </Routes>
    );
};

export default Routers;