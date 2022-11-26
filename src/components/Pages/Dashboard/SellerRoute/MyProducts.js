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
                                            <td className=''>
                                                {
                                                    product.role === 'advertised' ?
                                                        (
                                                            <span className="py-3 w-28 badge badge-ghost badge-2xl relative text-green-500 font-semibold"> {product.role}
                                                                <span class="flex items-center justify-center h-3 w-3 absolute right-0 top-0">
                                                                    <span class="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-green-400 opacity-75"></span>
                                                                    <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                                                </span>
                                                            </span>
                                                        )

                                                        :
                                                        (
                                                            <span className="py-3 w-28 badge badge-ghost badge-2xl relative text-red-500 font-semibold"> {product.role}
                                                                <span class="flex items-center justify-center h-3 w-3 absolute right-0 top-0">
                                                                    <span class="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-red-400 opacity-75"></span>
                                                                    <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                                                </span>
                                                            </span>
                                                        )
                                                }
                                            </td>
                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                {product.role === 'available' ?
                                                    (
                                                        <span
                                                            onClick={() => makeAdvetise(product)}
                                                            className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight inset-0 bg-green-200 rounded-full'
                                                        >
                                                            Make Advertise
                                                        </span>
                                                    )
                                                    :
                                                    (
                                                        <span
                                                            onClick={() => advertiseOff(product)}
                                                            className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight bg-green-200  rounded-full'
                                                        >
                                                            Advertise Close
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