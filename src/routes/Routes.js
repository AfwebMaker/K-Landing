import React from 'react';
//react router dom
import { Route, Routes } from 'react-router-dom'; // Navigate,

// components
import Home from '../pages/Home';
import Categories from '../pages/Categories';
import Category from '../pages/Category';

const Routers = () => {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/categories' element={<Categories />} ></Route>
            <Route path='/categories/decorations' element={<Category />} />
            <Route path='*' element={<Home />} />
            {/* <Route path='*' element={<h1>چیزی اینجا نیست!</h1>} /> */}
        </Routes>
    );
};

export default Routers;