import React, { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { getUserRole } from '../api/userSave';
import Sidebar from '../components/Pages/Dashboard/Sidebar';
import Spinner from '../components/Pages/Spinner/Spinner';
import { AuthContext } from '../Context/AuthProvider';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    const [role, setRole] = useState(null)

    useEffect(() => {
        setLoading(true)
        getUserRole(user?.email)
        .then(data => {
            console.log(data)
            setRole(data)
            setLoading(false)
        })

    }, [user])

    return (
        <div className='md:flex min-h-screen'>
            {
                loading ? 
                <Spinner/>
                :
                <div >
                    <Sidebar role={role}/>
                    <div className='flex-1 md:ml-64'>
                        <div className='p-7'>
                            <Outlet/>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default DashboardLayout;