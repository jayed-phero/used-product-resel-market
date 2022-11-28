import React from 'react';
import ScrollToTop from '../../../../hooks/Scrool-to-top';
import './HeaderImage.css';

const HeaderImage = () => {
    return (
        <div>
            <ScrollToTop/>
            <div
                class="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover rounded-lg backgroundImage"
            >
                <div
                    class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed headerImage"
                >
                    <div class="flex justify-center items-center h-full text-center">
                        <div class="text-white text-center flex flex-col items-center justify-center">
                            <h2 class="font-semibold text-4xl mb-4">Welcome to mobile<span className='text-regal-yellow'>ZONE</span></h2>
                            <h4 class="font-semibold text-xl mb-6 w-2/3 text-center">You can find your choicefull mobile here. so what are you waiting for !!! Browse our latest mobile...</h4>
                            <a
                                class="inline-block px-7 py-3 mb-1 border-2 border-gray-200 text-gray-200 font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                href="#!"
                                role="button"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >Scrool Down</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderImage;