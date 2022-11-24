import React from 'react';

const ProductModal = ({ product }) => {
    const { name } = product;

    const handleBooking = () => {

    }

    const user = [];
    return (
        <div>
            <input type="checkbox" id="product-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations random Internet user! {name}</h3>
                    <form onSubmit={handleBooking} action="" className='grid grid-cols-1 gap-4 mt-10'>
                        <input type="text" value={user} className="input input-bordered w-full " disabled />
                        <input name='name' type="text" placeholder="Type here" className="input input-bordered w-full " defaultValue={user?.displayName} />
                        <input name='email' type="email" placeholder="Type here" className="input input-bordered w-full " defaultValue={user?.email} disabled required />
                        <input name='phone' type="text" placeholder="Type here" className="input input-bordered w-full " />
                        <div className="modal-action">
                            <label htmlFor="product-modal" className="btn border-none w-full bg-regal-yellow"
                            type='submit'
                            >Submit</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;