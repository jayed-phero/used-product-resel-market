import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../Context/AuthProvider';
import ScrollToTop from '../../../../hooks/Scrool-to-top';
import useVerify from '../../../../hooks/useVerify';

const CategoriRow = ({ setProduct, cateData }) => {
    const {user} = useContext(AuthContext)
    const { image, name, reselPrice, orginalPrice, yearsOfUses, postsTime, location, selerName, email } = cateData;

    const [isVerify] = useVerify(email)

    const handleWishlist = () => {
        const wishlistData = {
           image,
           name,
           price: reselPrice,
           username: user.displayName ,
           email: user.email,
        }

        console.log(wishlistData)

        fetch(`${process.env.REACT_APP_API_LIN}/wishlist`, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(wishlistData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                toast.success("Product wishlisted successfullly")
            }
        })
    }
    return (
        <div>
            <ScrollToTop/>
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
                    <div className='border-2 border-gray-400 w-full p-2 flex  items-center justify-center flex-col md:flex-row gap-3 font-semi-bold text-center text-sm'>
                        <i className="fa-regular fa-clock text-lg text-regal-yellow"></i>
                        <div>
                            <p className='font-bold'>{postsTime}</p>
                            <h3>Post Time</h3>
                        </div>
                    </div>
                    <div className='border-2 border-gray-400 w-full p-2 flex  items-center text-center justify-center gap-3 font-semi-bold flex-col md:flex-row text-sm'>
                        <i className="fa-solid fa-location-dot text-lg text-regal-yellow font-semibold"></i>
                        <div>
                            <p className='font-bold'>{location}</p>
                            <h3>Location</h3>
                        </div>
                    </div>
                </div>
                <div className='flex items-center text-xl  py-3 gap-3'>
                    <h3>Seller : <span className='font-semibold'>{selerName}</span></h3>
                    {
                        isVerify && 
                        <p className='h-3 w-3 rounded-full bg-blue-500'></p>
                    }

                </div>
                <div className='flex items-center gap-3'>
                    <label htmlFor="product-modal" className="btn bg-regal-yellow border-none flex-1"
                        onClick={() => setProduct(cateData)}
                    >Book Now</label>
                    <div onClick={handleWishlist} className='btn bg-regal-yellow border-none'>
                        <i className="text-xl fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriRow;

