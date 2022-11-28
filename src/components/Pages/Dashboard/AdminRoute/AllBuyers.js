import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { getAllBuyer } from '../../../../api/adminAction';
import ScrollToTop from '../../../../hooks/Scrool-to-top';
import ConformationModal from '../../../Shared/ConformationModal/ConformationModal';
import Spinner from '../../Spinner/Spinner';

const AllBuyers = () => {
    const [loading, setLoading] = useState(true)
    const [deleteBuyer, setDeleteBuyer] = useState(null)
    // const [buyerData, setBuyerData] = useState([])

    // useEffect(() => {
    //     allBuyer()
    // }, [])

    // const allBuyer = () => {
    //     setLoading(true)
    //     getAllBuyer()
    //         .then(data => {
    //             console.log(data)
    //             setBuyerData(data)
    //             setLoading(false)
    //         })
    // }

    //  const getAllBuyer = async () => {
    //     const res = await fetch(`${process.env.REACT_APP_API_LIN}/alluser?role=buyer`)
    
    //     const sellers = await res.json()
    //     return sellers
    // }

    const { data: buyerData = [], refetch, isLoading } = useQuery({
        queryKey: ['alluser?role=buyer'],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_API_LIN}/alluser?role=buyer`);
            const data = await res.json()
            return data;
        }
    });

    // const { data: buyerData = [], refetch, isLoading } = useQuery({
    //     queryKey: ['alluser'],
    //     queryFn: () => fetch(`${process.env.REACT_APP_API_LIN}/alluser?role=buyer`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //         })
    // });

    if (isLoading) {
        return <Spinner />
    }

    const modalClose = () => {
        setDeleteBuyer(null)
    }

    const handleDeleteBuyer = buyer => {
        fetch(`${process.env.REACT_APP_API_LIN}/users/${buyer._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success(`Buyer ${buyer.name} deleted successfully`)
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
                                    <th>Role</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    buyerData?.map((buyer, i) =>
                                        <tr>
                                            <th>{i+1}</th>
                                            <td>{buyer.name}</td>
                                            <td>{buyer.email}</td>
                                            <td>{buyer.role}</td>
                                            <td>
                                                <label onClick={() => setDeleteBuyer(buyer)} htmlFor="modalConformation" className="btn btn-ghost text-error btn-xs">Delete</label>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
            }
            {
                deleteBuyer && <ConformationModal
                    title={` Are you sure want to delete !!!`}
                    message={`if you delete ${deleteBuyer.name}. we will never be able to recover it!!`}
                    successAction={handleDeleteBuyer}
                    modalData={deleteBuyer}
                    successButtonName="Delete"
                    modalClose={modalClose}
                />
            }
        </div>
    );
};

export default AllBuyers;