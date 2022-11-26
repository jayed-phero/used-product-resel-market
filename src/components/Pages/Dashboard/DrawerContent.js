import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const DrawerContent = ({role}) => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h2 class="text-3xl font-semibold text-gray-800 dark:text-white">Brand</h2>

            <div class="relative mt-6">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </span>

                <input type="text" class="w-full py-2 pl-10 pr-4 text-gray-700 border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" placeholder="Search" />
            </div>

            <div class="flex flex-col justify-between flex-1 mt-6">
                <nav>
                    {
                        role && role !== 'admin' ?
                            <h2>
                                {
                                    role === 'buyer' ?
                                        <Link className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" to='/dashboard/userroutes'>
                                            <i className="fa-solid fa-cart-arrow-down h-5 w-5"></i>

                                            <span class="mx-4 font-medium">My orders</span>
                                        </Link>
                                        :
                                        <>
                                            <Link class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" to='/dashboard/addaproduct'>
                                                <i className="fa-regular fa-square-plus h-5 w-5"></i>

                                                <span class="mx-4 font-medium">Add A Product</span>
                                            </Link>

                                            <Link className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" to='/dashboard/my-products'>
                                                <i className="fa-solid fa-store h-5 w-5"></i>

                                                <span class="mx-4 font-medium">My Products</span>
                                            </Link>

                                        </>
                                }
                            </h2>
                            :
                            <>

                                <Link class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" to='/dashboard/all-sellers'>
                                    <i className="fa-regular fa-user h-5 w-5"></i>

                                    <span class="mx-4 font-medium">All Sellers</span>
                                </Link>

                                <Link class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" to='/dashboard/all-buyers'>
                                    <i className="fa-regular fa-user h-5 w-5"></i>

                                    <span class="mx-4 font-medium">All Buyers</span>
                                </Link>
                            </>
                    }

                    <hr class="my-6 border-gray-200 dark:border-gray-600" />
                </nav>

                <div class="flex items-center px-4 -mx-2">
                    <img className="object-cover mx-2 rounded-full h-9 w-9" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar" />
                    <h4 class="mx-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">{user?.displayName}</h4>
                </div>
            </div>
        </div>
    );
};

export default DrawerContent;