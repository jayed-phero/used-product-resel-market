import React from 'react';
import ScrollToTop from '../../../hooks/Scrool-to-top';

const Dashboard = () => {
    return (
        <div className='text-3xl font-bold flex items-center justify-center min-h-screen'>
            <ScrollToTop/>
            <h3>Welcome To mobile<span className=' text-regal-yellow '>ZONE</span></h3>
        </div>
    );
};

export default Dashboard;