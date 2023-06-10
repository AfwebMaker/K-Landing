import React from 'react';
//components 
import Routers from '../routes/Routes';
import Footer from './footer/Footer';
import Header from '../layout/header/Header';

const Layout = () => {

    return (
        <>
            {/* Header */}
            <Header />
            {/* Routers */}
            <Routers />
            {/* footer */}
            <Footer />
        </>
    );
};

export default Layout;