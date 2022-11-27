import React from 'react';
import AdvertiseProducts from '../AdvertiseProducts/AdvertiseProducts';
import CategoriesContainer from '../Categories/CategoriesContainer';
import HeaderImage from '../HeaderImage/HeaderImage';

const Home = () => {
    return (
        <div>
            <HeaderImage/>
            <AdvertiseProducts/>
           <CategoriesContainer/>
        </div>
    );
};

export default Home;