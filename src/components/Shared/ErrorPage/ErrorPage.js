import React, { useContext } from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import './ErrorPage.css';

const ErrorPage = () => {
    const { logout } = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate();

    const logOutHandler = () => {
        logout()
            .then(data => {
                navigate('/signin')
            })
    }

    return (
        <div>
            <section className="backgroundImag flex items-center h-full p-16 dark:dark:bg-gray-900 dark:dark:text-gray-100">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl text-white">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className='text-red-500 font-bold text-3xl md:text-5xl'>{error.statusText || error.message}</p>
                        <p className="mt-4 mb-8 text-xl text-xl font-semibold text-white">But dont worry, Please <span className='text-2xl'>Sign Out</span> and log back in for solve this problem</p>
                        <button
                            onClick={logOutHandler}
                            className='rounded px-7 py-3 bg-green-400 text-green-900 font-semibold mb-5'
                        >Sign out</button>
                         <Link rel="noopener noreferrer" to='/' className="px-8 py-3 block font-semibold rounded bg-violet-400 text-gray-900">Back to homepage</Link>
                    </div>
                </div>
            </section>
        </div>
    );

};

export default ErrorPage;