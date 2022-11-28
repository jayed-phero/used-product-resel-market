import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../Context/AuthProvider';
import ScrollToTop from '../../../../hooks/Scrool-to-top';

const ProductModal = ({ product, setProduct }) => {
    const { user } = useContext(AuthContext)
    const { name, reselPrice, image } = product;

    const handleBooking = (e) => {
        e.preventDefault()
        const form = e.target
        const username = form.username.value;
        const email = form.email.value
        const price = form.price.value;
        const phone = form.phone.value
        const img = image
        const location = form.location.value
        const productName = form.productName.value

        const bookingData = {
            username,
            email,
            img,
            price,
            phone,
            location,
            productName
        }

        fetch(`${process.env.REACT_APP_API_LIN}/bookings`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setProduct(null)
                    toast.success("Product booking successfullly done")
                }
            })

        console.log(bookingData)
        // setProduct(null)
    }

    return (
        <div>
            <ScrollToTop />
            <input type="checkbox" id="product-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-xl text-center">{name}</h3>
                    <form onSubmit={handleBooking} action="" className='grid grid-cols-1 gap-4 mt-10'>
                        <input
                            type="text"
                            name='username'
                            defaultValue={user?.displayName} className="input input-bordered w-full " disabled
                        />
                        <input
                            name='email'
                            type="email"
                            placeholder="Type here"
                            className="input input-bordered w-full " defaultValue={user?.email} disabled
                        />
                        <div className='flex items-center gap-5'>
                            <input
                                name='productName'
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full " defaultValue={name}
                                disabled
                            />
                            <input
                                name='price'
                                type="text"
                                className="input input-bordered w-full " defaultValue={reselPrice}
                                disabled required
                            />
                        </div>
                        <input
                            name='phone'
                            type="text"
                            placeholder="Mobile Number"
                            className="input input-bordered w-full "
                            required
                        />
                        <input
                            name='location'
                            type="text"
                            placeholder="Address"
                            className="input input-bordered w-full "
                            required
                        />
                        <button className='btn border-none w-full bg-regal-yellow' type='submit' htmlFor="product-modal" >
                            submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;