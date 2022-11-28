import React from 'react';
import ScrollToTop from '../../../../hooks/Scrool-to-top';
import AdvertiseProducts from '../AdvertiseProducts/AdvertiseProducts';
import CategoriesContainer from '../Categories/CategoriesContainer';
import Contact from '../Contact/Contact';
import HeaderImage from '../HeaderImage/HeaderImage';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <ScrollToTop />
            <HeaderImage />
            <AdvertiseProducts />
            <CategoriesContainer />
            <Services/>
            <Contact/>
        </div>
    );
};

export default Home;