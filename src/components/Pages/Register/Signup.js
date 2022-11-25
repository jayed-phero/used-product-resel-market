import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { authTokenAndSaveUser } from '../../../api/userSave';
import { AuthContext } from '../../../Context/AuthProvider';

const Signup = () => {
    const { user, createUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleSignup = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
                updateUserProfile(data.name)
                const userData = {
                    email: user.email,
                    userName: data.name,
                    role: data.select
                }
                authTokenAndSaveUser(userData)

            })
            .catch(err => console.log(err))
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user
                console.log(user)
                const userData = {
                    email: user.email,
                    userName: user.displayName,
                    role: "buyer"
                }
                authTokenAndSaveUser(userData)

            })
    }
    return (
        <div className='mt-32'>
            <div class="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <h1 class="text-3xl font-semibold text-center text-gray-700 dark:text-white">IT Waala</h1>

                <form onSubmit={handleSubmit(handleSignup)} class="mt-6">
                    <div>
                        <label htmlFor="username" class="block text-sm text-gray-800 dark:text-gray-200">Username</label>
                        <input type="text"
                            {...register("name")}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div>
                        <label htmlFor="email" class="block text-sm text-gray-800 dark:text-gray-200">Email</label>
                        <input type="email"
                            {...register("email")} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>


                    <div class="mt-4">
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" class="block text-sm text-gray-800 dark:text-gray-200">Password</label>
                            <Link href="#" class="text-xs text-blue-600 dark:text-gray-400 hover:underline">Forget Password?</Link>
                        </div>

                        <input type="password"
                            {...register("password")} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div class="mt-4">
                        <select type="text"
                            {...register("select")}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 select select-bordered">
                            <option value="buyer" selected>Buyer</option>
                            <option value="seller">Seller</option>
                        </select>
                    </div>
{/* 
                    <div>
                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Who shot first?</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                    </div> */}


                    <div class="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" type='submit'>
                            Sign Up
                        </button>
                    </div>
                </form>

                <div class="flex items-center justify-between mt-4">
                    <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

                    <a href="#" class="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
                        or login with Social Media
                    </a>

                    <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
                </div>

                <div class="flex items-center mt-6 -mx-2">
                    <button onClick={handleGoogleSignIn} type="button" class="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                        <svg class="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                            </path>
                        </svg>

                        <span class="hidden mx-2 sm:inline">Sign in with Google</span>
                    </button>

                    <a href="#" class="p-2 mx-2 text-sm font-medium text-gray-500 transition-colors duration-300 transform bg-gray-300 rounded-md hover:bg-gray-200">
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z">
                            </path>
                        </svg>
                    </a>
                </div>

                <p class="mt-8 text-xs font-light text-center text-gray-400"> Already have an account? <Link to='/signin' class="font-medium text-blue-700 dark:text-gray-200 hover:underline">Login</Link></p>
            </div>
        </div>
    );
};

export default Signup;