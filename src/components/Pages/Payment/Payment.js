import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useContext } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import ScrollToTop from '../../../hooks/Scrool-to-top';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PK}`);


const Payment = () => {
    const data = useLoaderData()
    const navigation = useNavigation()
    const {user} = useContext(AuthContext)
    console.log(data)
    const { productName } = data;
    if(navigation.state === "loading"){
        // return <
    }
    return (
        <div className='md:px-52 '>
            <ScrollToTop/>
            <section class="bg-white dark:bg-gray-900">
                <div class="container px-6 py-24 mx-auto lg:py-32">
                    <div class="lg:flex">
                        <div class="lg:w-1/2">
                            <h1 class="text-gray-600 dark:text-gray-300 md:text-lg">Welcome Here</h1>

                            <h1 class="mt-4 text-3xl font-medium text-gray-800 capitalize md:text-4xl lg:text-5xl dark:text-white">
                                Payment For <span className='text-regal-yellow text-2xl'>{productName}</span>
                            </h1>
                        </div>

                        <div class="mt-8 lg:w-1/2 lg:mt-0">
                            <form class="w-full lg:max-w-xl">
                                <div class="relative flex items-center">
                                    <span class="absolute">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </span>

                                    <input type="text" class="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" defaultValue={user?.displayName} disabled/>
                                </div>

                                <div class="relative flex items-center mt-4">
                                    <span class="absolute">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </span>

                                    <input type="email" class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" defaultValue={user?.email} disabled />
                                </div>
                            </form>
                            <div className='mt-7'>
                                <Elements stripe={stripePromise}>
                                    <CheckoutForm data={data} />
                                </Elements>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Payment;