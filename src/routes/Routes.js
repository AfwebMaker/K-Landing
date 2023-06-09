import React from 'react';
//react router dom
import { Route, Routes } from 'react-router-dom'; // Navigate,

// components
import { Home } from '../pages/Home';

const Routers = () => {
    
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='*' element={<Home/>} />
            </Routes>
        </div>
    );
};

export default Routers;