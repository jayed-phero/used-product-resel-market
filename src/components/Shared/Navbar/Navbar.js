import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogout = () => {
        logout()
        navigate('/')
    }
    return (
        <div>
            <div className="navbar bg-base-100 py-5 shadow-lg lg:px-52 px-5 flex justify-between items-center">
                <div className="">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={2} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to='/'><li><a
                                className='rounded-lg'
                            >Home</a></li></Link>
                            <Link to='/blogs'><li><a
                                className='rounded-lg'
                            > Blogs</a></li></Link>
                            {
                                user?.uid ?
                                    <>
                                        <Link to='/dashboard'><li><a
                                            className='rounded-lg'
                                        >Dashboard</a></li></Link>
                                        <li onClick={handleLogout}><a
                                            className='rounded-lg'
                                        >Log Out</a></li>
                                    </>

                                    :
                                    undefined
                            }
                            <Link to="/signin"> <h3
                                className='px-9 py-3 mt-5 rounded-3xl border-2 border-regal-yellow bg-regal-yellow hover:bg-transparent'
                            >SignIn</h3></Link>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-2xl"><h3>mobile<span className=' text-regal-yellow '>ZONE</span></h3></a>
                </div>
                <div className="text-lg ">
                    <ul className="menu menu-horizontal p-0 mr-3 hidden lg:flex">
                        <Link to='/'><li><a
                            className='rounded-lg'
                        >Home</a></li></Link>
                        <Link to='/blogs'><li><a
                            className='rounded-lg'
                        > Blogs</a></li></Link>
                        <a href='#categori'><li><a
                            className='rounded-lg'
                        > Categories</a></li></a>
                        {
                            user?.uid ?
                                <>
                                    <Link to='/dashboard'><li><a
                                        className='rounded-lg'
                                    >Dashboard</a></li></Link>
                                    <li onClick={handleLogout}><a
                                        className='rounded-lg'
                                    >Log Out</a></li>
                                </>

                                :
                                undefined
                        }

                    </ul>
                    <Link to="/signin"> <h3
                        className='px-9 py-3 rounded-3xl border-2 border-regal-yellow bg-regal-yellow hover:bg-transparent hidden md:block'
                    >SignIn</h3></Link>
                    <label htmlFor="my-drawer-2" tabIndex={2} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;