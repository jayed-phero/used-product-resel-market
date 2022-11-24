import React from 'react';

const CategoriRow = ({ setProduct, cateData }) => {
    const {image, name, reselPrice, orginalPrice, yearsOfUses, postsTime, location, selerName} = cateData
    return (
        <div>
            <div className='border-2 border-dashed border-gray-400 p-5 flex flex-col justify-center itmes-center'>
                <img className='h-44' src={image} alt="" />
                <h3 className='text-3xl font-semibold py-3'>{name}</h3>
                <div className='pt-5 flex flex-col gap-2'>
                    <div className='border-2 border-regal-yellow  flex items-center justify-between w-full p-2 text-lg font-semibold'>
                        <h3>Price :</h3>
                        <p className='text-regal-yellow font-bold'>{reselPrice}</p>
                    </div>
                    <div className='border-2 border-regal-yellow  flex items-center justify-between w-full p-2 text-lg font-semibold'>
                        <h3>Original Price :</h3>
                        <p className='text-regal-yellow font-bold'>{orginalPrice}</p>
                    </div>
                    <div className='border-2 border-regal-yellow  flex items-center justify-between w-full p-2 text-lg font-semibold'>
                        <h3>Years Of Use :</h3>
                        <p className='text-regal-yellow font-bold'>{yearsOfUses}</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 mt-5'>
                    <div className='border-2 border-gray-400 w-full p-2 flex  items-center justify-center flex-col md:flex-row gap-3 font-semi-bold text-center'>
                        <i className="fa-regular fa-clock text-xl text-regal-yellow"></i>
                        <div>
                            <p className='font-bold'>{postsTime}</p>
                            <h3>Product Post Time</h3>
                        </div>
                    </div>
                    <div className='border-2 border-gray-400 w-full p-2 flex  items-center 
                                text-center justify-center gap-3 font-semi-bold flex-col md:flex-row'>
                        <i className="fa-solid fa-location-dot text-xl text-regal-yellow
                                     font-semibold"></i>
                        <div>
                            <p className='font-bold'>{location}</p>
                            <h3>Location</h3>
                        </div>
                    </div>
                </div>
                <div className='flex items-center text-xl  py-5 '>
                    <h3>Seller : <span className='font-semibold'>{selerName}</span></h3>
                    <p></p>
                </div>
                {/* <Link>
                    <label className='w-full py-3 flex items-center justify-center border-2 border-regal-yellow bg-regal-yellow hover:bg-transparent text-lg font-semibold btn' htmlFor="product-modal">Book Now</label>
                </Link> */}
                <label htmlFor="product-modal" className="btn bg-regal-yellow border-none"
                onClick={() => setProduct(cateData)}
                >Book Now</label>
            </div>
        </div>
    );
};

export default CategoriRow;


// <a href="https://imgbb.com/"><img src="https://i.ibb.co/rvVfGJx/apple-5.jpg" alt="apple-5" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/0hdcKjJ/apple-12.jpg" alt="apple-12" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/nkqjrs2/appli-14.jpg" alt="appli-14" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/sJNf4Sy/samsung-a50.jpg" alt="samsung-a50" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/HYjfC3s/samsung-gs9.jpg" alt="samsung-gs9" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/CwVvJCZ/samsung-note7.jpg" alt="samsung-note7" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/F7Qn4yY/vivo-15a.jpg" alt="vivo-15a" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/L1xk1Nf/vivo-20.jpg" alt="vivo-20" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/mJT3s5g/vivo-75.jpg" alt="vivo-75" border="0"></a>