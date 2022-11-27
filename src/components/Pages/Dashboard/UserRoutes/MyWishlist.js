import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllWishlistedProducts } from '../../../../api/wishlist';
import Spinner from '../../Spinner/Spinner';

const MyWishlist = () => {
    const [wishlist, setWishlist] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAllWishlist()
    }, [])
    const getAllWishlist = () => {
        setLoading(true)
        getAllWishlistedProducts()
            .then(data => {
                console.log(data)
                setWishlist(data)
                setLoading(false)
            })
    }
    return (
        <div>
            {
                loading ?
                    <Spinner />
                    :
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Pay</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    wishlist.map((wish, i) =>
                                        <tr key={wish._id}>
                                            <th>{i + 1}</th>
                                            <td>
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={wish.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{wish.name}</td>
                                            <td>{wish.reselPrice}</td>
                                            <td className=''>
                                                <Link to={`/dashboard/wishlistpayment/${wish._id}`}> <button className='btn btn-sm bg-regal-yellow border-none'>Pay</button>
                                                </Link>
                                            </td>
                                        </tr>

                                    )
                                }
                            </tbody>
                        </table>
                    </div>
            }
        </div>
    );
};

export default MyWishlist;