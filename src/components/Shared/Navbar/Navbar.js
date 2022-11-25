import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 py-5 shadow-lg lg:px-52 px-5 fixed top-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-2xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">

                </div>
                <div className="navbar-end text-lg">
                    <ul className="menu menu-horizontal p-0 mr-3 hidden lg:flex">
                       <Link to='/'><li><a
                            className='rounded-lg'
                        >Home</a></li></Link> 
                        <li><a
                            className='rounded-lg'
                        > Blogs</a></li>
                        <Link to='/advertise'><li><a
                            className='rounded-lg'
                        >Advertisement</a></li></Link>
                    </ul>
                   <Link to="/signin"> <h3
                        className='px-9 py-3 rounded-3xl border-2 border-regal-yellow bg-regal-yellow hover:bg-transparent'
                    >SignIn</h3></Link>
                </div>
            </div>
            {/* <header>
                <img
                    src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""
                    className='w-full' />
            </header> */}
        </div>
    );
};

export default Navbar;