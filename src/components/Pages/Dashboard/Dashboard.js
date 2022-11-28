import React from 'react';
import ScrollToTop from '../../../hooks/Scrool-to-top';

const Dashboard = () => {
    return (
        <div className='text-3xl font-bold flex items-center flex-col justify-center text-center min-h-screen'>
            <ScrollToTop />
            <h3>Welcome To mobile<span className=' text-regal-yellow '>ZONE</span></h3>
            <div className=' mt-5'>
                <div className="w-16 h-16 border-4 mt-11 border-dashed rounded-full animate-spin border-violet-400 flex items-center justify-center text-3xl font-semibold text-black">
                    M<span className='text-regal-yellow'>Z</span>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;