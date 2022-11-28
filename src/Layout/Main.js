import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';
import Navbar from '../components/Shared/Navbar/Navbar';
import ScrollToTop from '../hooks/Scrool-to-top';

const Main = () => {
    return (
        <div>
            <ScrollToTop/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;