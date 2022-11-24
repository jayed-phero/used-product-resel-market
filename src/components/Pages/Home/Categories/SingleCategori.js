import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SingleCategori = () => {
    const data = useLoaderData()
    const { categori } = data
    // const [categoriData, setCategoriData] = useState([])
    // console.log(data)
    // useEffect(() => {
    //     fetch('categori.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setCategoriData(data)
    //         })
    // }, [])

    // const { categori } = categoriData[1]

    return (
        <div className='px-5 md:px-52 mt-32 '>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-11 '>
                {
                    categori.map(cateData =>
                        <div className='border-2 border-dashed border-gray-400 p-5 flex flex-col justify-center itmes-center'>
                            <img className='h-44' src={cateData.image} alt="" />
                            <h3 className='text-3xl font-semibold py-3'>{cateData.name}</h3>
                            <div className='pt-5 flex flex-col gap-2'>
                                <div className='border-2 border-regal-yellow  flex items-center justify-between w-full p-2 text-lg font-semibold'>
                                    <h3>Price :</h3>
                                    <p className='text-regal-yellow font-bold'>{cateData.reselPrice}</p>
                                </div>
                                <div className='border-2 border-regal-yellow  flex items-center justify-between w-full p-2 text-lg font-semibold'>
                                    <h3>Original Price :</h3>
                                    <p className='text-regal-yellow font-bold'>{cateData.orginalPrice}</p>
                                </div>
                                <div className='border-2 border-regal-yellow  flex items-center justify-between w-full p-2 text-lg font-semibold'>
                                    <h3>Years Of Use :</h3>
                                    <p className='text-regal-yellow font-bold'>{cateData.yearsOfUses}</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-5 mt-5'>
                                <div className='border-2 border-gray-400 w-full p-2 flex  items-center justify-center flex-col gap-3 font-semi-bold text-center'>
                                    <i className="fa-regular fa-clock text-xl text-regal-yellow"></i>
                                    <div>
                                        <p className='font-bold'>{cateData.postsTime}</p>
                                        <h3>Product Post Time</h3>
                                    </div>
                                </div>
                                <div className='border-2 border-gray-400 w-full p-2 flex  items-center 
                                text-center justify-center gap-3 font-semi-bold flex-col '>
                                    <i className="fa-solid fa-location-dot text-xl text-regal-yellow
                                     font-semibold"></i>
                                    <div>
                                        <p className='font-bold'>{cateData.location}</p>
                                        <h3>Location</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center text-xl  py-5 '>
                                <h3>Seller : <span className='font-semibold'>{cateData.selerName}</span></h3>
                                <p></p>
                            </div>
                            <Link>
                             <h3 className='w-full py-3 flex items-center justify-center border-2 border-regal-yellow bg-regal-yellow hover:bg-transparent text-lg font-semibold'>Book Now</h3>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default SingleCategori;