import React, { useContext, useEffect, useState } from 'react';
import { advertiseProductsRole, advertiseProductsShow } from '../../../../api/advertiseProduct';
import { AuthContext } from '../../../../Context/AuthProvider';

const AdvertiseProducts = () => {

    const { user } = useContext(AuthContext)
    const [productsData, setProductsData] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setLoading(true)
        advertiseProductsShow(user)
            .then(data => {
                console.log(data)
                setProductsData(data)
                setLoading(false)
            })
    }, [])
    return (
        <div className='md:px-52 py-20'>
            {
                productsData?.slice(0, 1).map(prod =>
                    prod.role === 'advertised' &&
                    <div className='flex flex-col items-center justify-center py-11'>
                        <h3 className='text-3xl font-semibold text-regal-yellow pb-2'>Todays Advertised Products</h3>
                        <p className='text-lg font-semibold'>Take your offer now !!!</p>
                    </div>

                )
            }

            {
                productsData?.map(product =>
                    product?.role === 'advertised' &&
                    <>
                        <div className=''>
                            <div className='flex flex-col md:flex-row items-start gap-7 mb-11 relative'>
                                <img
                                    src={product.image}
                                    alt=""
                                    className=' w-full md:w-64 shadow-xl h-64 rounded-3xl'
                                />
                                <div className='flex-1'>
                                    <h3
                                        className='text-2xl font-semibold py-3'
                                    >Product Model: {product.name}</h3>
                                    <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                    <div className='text-lg py-2'>
                                        <h3>Price: <span className='font-semibold'>{product.reselPrice}</span></h3>
                                        <h3>Original Price: <span className='font-semibold'>{product.orginalPrice}</span></h3>
                                    </div>
                                    <div className='flex items-center gap-5 mt-2'>
                                        <div className='h-11 w-11 border-2 border-regal-yellow flex items-center justify-center rounded-lg'>
                                            <i className="fa-solid fa-map-location-dot text-xl text-regal-yellow"></i>
                                        </div>
                                        <h3 className='text-xl font-semibold'>{product.location}</h3>
                                    </div>
                                </div>
                                <span class="flex items-center justify-center h-5 w-5 absolute -left-1 -top-1">
                                    <span class="animate-ping absolute inline-flex h-9 w-9 rounded-full bg-green-400 opacity-75"></span>
                                    <span class="relative inline-flex rounded-full h-5 w-5 bg-green-500"></span>
                                </span>
                            </div>
                        </div>
                    </>

                )

            }
        </div>
    );
};

export default AdvertiseProducts;


// productsData?.map(product =>
//     product?.role === 'advertised' &&
//     <>
//         <div className='flex flex-col items-center justify-center py-11'>
//             <h3 className='text-3xl font-semibold text-regal-yellow pb-2'>Todays Advertised Products</h3>
//             <p className='text-lg font-semibold'>Take your offer now !!!</p>
//         </div>

//         <div className=''>
//             <div className='flex flex-col md:flex-row items-start gap-7 mb-5'>
//                 <img
//                     src="https://images.unsplash.com/photo-1569863629718-20f8b6c62460?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aXBob25lJTIwNGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
//                     alt=""
//                     className=' w-full md:w-64 shadow-xl h-64 rounded-3xl'
//                 />
//                 <div className='flex-1'>
//                     <h3
//                         className='text-2xl font-semibold py-3'
//                     >Product Model: iphone 14 pro</h3>
//                     <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
//                     <div className='text-lg py-2'>
//                         <h3>Price: <span className='font-semibold'>13,000</span></h3>
//                         <h3>Original Price: <span className='font-semibold'>13,000</span></h3>
//                     </div>
//                     <div className='flex items-center gap-5 mt-2'>
//                         <div className='h-11 w-11 border-2 border-regal-yellow flex items-center justify-center rounded-lg'>
//                             <i className="fa-solid fa-map-location-dot text-xl text-regal-yellow"></i>
//                         </div>
//                         <h3 className='text-xl font-semibold'>Dhaka, Sahbag</h3>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </>

// )