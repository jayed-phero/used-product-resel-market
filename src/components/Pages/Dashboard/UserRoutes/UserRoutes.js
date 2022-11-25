import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider';
import Spinner from '../../Spinner/Spinner';
import SingleBookingData from './SingleBookingData';

const UserRoutes = () => {
    const { user } = useContext(AuthContext)
    const [bookingData, setBookingData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch(`${process.env.REACT_APP_API_LIN}/allbookings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBookingData(data)
                setLoading(false)
            })
    }, [user])
    return (
        <div>
            {
                loading ?
                    <Spinner />
                    :
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            {/* <!-- head --> */}
                            <thead>
                                <tr>
                                    <th>

                                    </th>
                                    <th>Product</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <!-- row 1 --> */}
                               {
                                  bookingData.map((data , i) => 
                                     <SingleBookingData 
                                     data={data}
                                     i={i}
                                     />
                                  )
                               }
                            </tbody>
                        </table>
                    </div>
            }
        </div>
    );
};

export default UserRoutes;