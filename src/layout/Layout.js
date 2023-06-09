import React from 'react';
//components 
import Routers from '../routes/Routes';
import Footer from './footer/Footer';

const Layout = () => {

    return (
        <div>
            {/* navbar */}
            <div>navbar</div>
            <Routers />
            {/* footer */}
            <Footer/>
        </div>
    );
};

export default Layout;