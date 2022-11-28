import React from 'react';
import ScrollToTop from '../../../hooks/Scrool-to-top';
const Blogs = () => {

    return (
        <div className='md:px-20 xl:px-52'>
            <ScrollToTop/>
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <div className="flex items-center justify-between">
                        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Blog posts </h1>

                        <button className="focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>

                    <hr className="my-8 border-gray-200 dark:border-gray-700" />

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                        <div>
                            <img className="object-cover object-center w-full h-32 rounded-lg " src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                            <div className="mt-8">
                                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                                    What are the different ways to manage a state in a React application?
                                </h1>

                                <p className="mt-2 text-gray-500 dark:text-gray-400">
                                    Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind. There are four main types of state can manage React apps:
                                </p>
                                <p>1. Local state</p>
                                <p>2. Global state</p>
                                <p>3. Server State</p>
                                <p>4. URL state</p>
                            </div>
                        </div>

                        <div>
                            <img className="object-cover object-center w-full h-32 rounded-lg " src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                            <div className="mt-8">
                                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                                    How does prototypical inheritance work?
                                </h1>

                                <p className="mt-2 text-gray-500 dark:text-gray-400">
                                    The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object.
                                </p>
                            </div>
                        </div>

                        <div>
                            <img className="object-cover object-center w-full h-32 rounded-lg " src="https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="" />

                            <div className="mt-8">
                                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                                    What is a unit text? Why should we write unit tests ?
                                </h1>

                                <p className="mt-2 text-gray-500 dark:text-gray-400">
                                    The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                                </p>
                            </div>
                        </div>



                        <div>
                            <img className="object-cover object-center w-full h-32 rounded-lg " src="https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="" />

                            <div className="mt-8">
                                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                                    React vs. Angular vs. Vue?
                                </h1>

                                <p className="mt-2 text-gray-500 dark:text-gray-400">
                                    Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default Blogs;