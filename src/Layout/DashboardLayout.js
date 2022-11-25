import React, { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { getUserRole } from '../api/userSave';
import DrawerContent from '../components/Pages/Dashboard/DrawerContent';
import Spinner from '../components/Pages/Spinner/Spinner';
import NavbarDrawer from '../components/Shared/Navbar/NavbarDrawer';
import { AuthContext } from '../Context/AuthProvider';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
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
        <div className='min-h-screen '>
            <NavbarDrawer/>
            {
                loading ?
                    <Spinner />
                    :
                    <div className="drawer drawer-mobile ">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content p-5">
                            <Outlet />
                        </div>
                        <div className="drawer-side shadow-xl">
                            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 bg-base-100 text-base-content ">
                                {/* <!-- Sidebar content here --> */}
                                <DrawerContent role={role} />
                            </ul>

                        </div>
                    </div>
            }
        </div>
    );
};

export default DashboardLayout;