import React from 'react';
//components 
import Routers from '../routes/Routes';
import Footer from './footer/Footer';
import Header from '../layout/header/Header.js';
import { useLocation } from 'react-router-dom';

const Layout = () => {
    const location = useLocation()

    return (
        <>
            {location.pathname === '/login' ?
                <Routers /> :
                <>
                    <Header />
                    <Routers />
                    <Footer />
                </>

            }
        </>
    );
};

export default Layout;