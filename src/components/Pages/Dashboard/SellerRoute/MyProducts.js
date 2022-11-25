import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    const [productsData, setProductsData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch(`${process.env.REACT_APP_API_LIN}/allproducts?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProductsData(data)
                setLoading(false)
            })
    }, [user])
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            productsData?.map((product, i) =>
                                <tr key={i} className="">
                                    <th>{i + 1}</th>
                                    <td>{product.name}</td>
                                    <td>{product.reselPrice}</td>
                                    <td>
                                        <span className="badge badge-ghost badge-2xl">{product.role}</span>
                                    </td>
                                    <td>
                                        <button className="btn btn-ghost btn-xs">Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;