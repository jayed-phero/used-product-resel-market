import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider';
import ScrollToTop from '../../../../hooks/Scrool-to-top';
import Spinner from '../../Spinner/Spinner';

const MyWishlist = () => {
    const { user } = useContext(AuthContext)
    const [wishlist, setWishlist] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAllWishlist()
    }, [])
    const getAllWishlist = () => {
        setLoading(true)
        getAllWishlistedProducts(user.email)
            .then(data => {
                console.log(data)
                setWishlist(data)
                setLoading(false)
            })
    }

    const getAllWishlistedProducts = async (email) => {
        const res = await fetch(`${process.env.REACT_APP_API_LIN}/wishlistedproducts/${email}`)

        const wishlist = await res.json()
        return wishlist
    }

    return (
        <div>
            <ScrollToTop />
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