import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { getAllSeller, verifySeller } from '../../../../api/adminAction';
import ScrollToTop from '../../../../hooks/Scrool-to-top';
import ConformationModal from '../../../Shared/ConformationModal/ConformationModal';
import Spinner from '../../Spinner/Spinner';

const AllSellers = () => {
    const [sellers, setSellers] = useState([])
    const [loading, setLoading] = useState(true)
    const [deleteSeller, setDeleteSeller] = useState(null)

    useEffect(() => {
        allSellerGet()
    }, [])

    const makeVerify = seller => {
        verifySeller(seller)
            .then(data => {
                console.log(data)
                allSellerGet()
            })
    }



    const allSellerGet = () => {
        setLoading(true)
        getAllSeller()
            .then(data => {
                setSellers(data)
                setLoading(false)
            })
    }


    const modalClose = () => {
        setDeleteSeller(null)
    }

    const handleDeleteSeller = seller => {
        fetch(`${process.env.REACT_APP_API_LIN}/users/${seller._id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                allSellerGet();
                toast.success(`Seller ${seller.name} deleted successfully`)
            }
        })

    }
    return (
        <div>
            <ScrollToTop/>
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
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Verify</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <!-- row 1 --> */}
                                {
                                    sellers.map((seller, i) =>
                                        <tr key={seller._id}>
                                            <th>{i + 1}</th>
                                            <td>{seller.name}</td>
                                            <td>{seller.email}</td>
                                            <td>
                                                <button onClick={() => makeVerify(seller)} className=''>
                                                    {
                                                        seller.verify === 'unverified' ?
                                                            <span className='badge badge-ghost badge-2xl bg-red-200 px-3 py-1 text-red-900 leading-tight inset-0 '>
                                                                unverified
                                                            </span>
                                                            :
                                                            <span className='badge badge-ghost badge-2xl bg-green-200 px-3 py-1 text-green-900 leading-tight inset-0 '>
                                                                verified
                                                            </span>
                                                    }
                                                </button>
                                            </td>
                                            <td>
                                                <label onClick={() => setDeleteSeller(seller)} htmlFor="modalConformation" className="btn btn-ghost text-error btn-xs">Delete</label>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
            }
            {
                deleteSeller && <ConformationModal
                title={` Are you sure want to delete !!!`}
                message={`if you delete ${deleteSeller.name}. we will never be able to recover it!!`}
                successAction={handleDeleteSeller}
                modalData={deleteSeller}
                successButtonName="Delete"
                modalClose={modalClose}
                />
            }
        </div>
    );
};

export default AllSellers;