import React from 'react';
import Header from '../Common/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Common/Footer/Footer';

const LoginLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default LoginLayout;