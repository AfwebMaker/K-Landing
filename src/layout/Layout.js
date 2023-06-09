import React from 'react';
//components 
import Routers from '../routes/Routes';
import Footer from './footer/Footer';
import Header from './header/Header';

const Layout = () => {

    return (
        <div>
            {/* Header */}
            <Header />
            {/* Routers */}
            <Routers />
            {/* footer */}
            <Footer />
        </div>
    );
};

export default Layout;