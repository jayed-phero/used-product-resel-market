import React, { useContext, useEffect, useState } from 'react';
import { advertiseClose, advertiseProduct, allProductForSeller } from '../../../../api/products';
import { AuthContext } from '../../../../Context/AuthProvider';
import Spinner from '../../Spinner/Spinner';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    const [productsData, setProductsData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        allProductsGet()
    }, [])

    const makeAdvetise = product => {
        advertiseProduct(product)
            .then(data => {
                console.log(data)
                allProductsGet()
            })
    }

    const advertiseOff = product => {
        advertiseClose(product)
            .then(data => {
                console.log(data)
                allProductsGet()
            })
    }

    const allProductsGet = () => {
        setLoading(true)
        allProductForSeller(user)
            .then(data => {
                setProductsData(data)
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
                            {/* <!-- head --> */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                    <th></th>
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
                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                {product.role === 'adailable' ?
                                                    (
                                                        <span
                                                            onClick={() => makeAdvetise(product)}
                                                            className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
                                                        >
                                                            <span
                                                                aria-hidden='true'
                                                                className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                                                            ></span>
                                                            <span className='relative'>
                                                                Make Advertise
                                                            </span>
                                                        </span>
                                                    )
                                                    :
                                                    (
                                                        <span
                                                            onClick={() => advertiseOff(product)}
                                                            className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
                                                        >
                                                            <span
                                                                aria-hidden='true'
                                                                className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                                                            ></span>
                                                            <span className='relative'>
                                                                Advertise Close
                                                            </span>
                                                        </span>
                                                    )
                                                }
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
            }
        </div>
    );
};

export default MyProducts;