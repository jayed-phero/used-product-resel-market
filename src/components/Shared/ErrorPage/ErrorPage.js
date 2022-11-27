import React, { useContext } from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

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
            <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center flex flex-col items-center justify-center">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqI3lHFjBbLelg5rGnkZVukHUI2cd9cnEGOQ&usqp=CAU"
                            alt=""
                            className='h-44 w-44'
                        />
                        <p className="text-xl font-semibold md:text-2xl">Sorry, something was wrong !!!</p>
                        <p className='text-red-500 font-semibold text-2xl md:text-3xl'>{error.statusText || error.message}</p>
                        <p className="mt-4 mb-8 dark:text-gray-400">But dont worry, Please <button
                            onClick={logOutHandler}
                            className='rounded-xl px-5 py-1 bg-green-200 text-green-900 font-semibold'
                        >Sign out</button> and log back in for solve this problem</p>
                        <Link rel="noopener noreferrer" to='/' className="px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900">Back to homepage</Link>
                    </div>
                </div>
            </section>
        </div>
    );

};

export default ErrorPage;