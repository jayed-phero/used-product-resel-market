import { data } from 'autoprefixer';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { postAndGetImageUrl } from '../../../../api/ImagePost';
import { AuthContext } from '../../../../Context/AuthProvider';

const AddAProduct = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const currTime = new Date().toLocaleTimeString();
    const navigate = useNavigate()

    const handleAdding = (data) => {
        console.log(data)
        const image = data.image[0]

        postAndGetImageUrl(image)
            .then(imgData => {

                const bookingData = {
                    name: data.productname,
                    condition: data.condition,
                    image: imgData,
                    yearsOfUses: data.pyear,
                    reselPrice: data.price,
                    orginalPrice: data.originalPrice,
                    categori_id: data.categori,
                    description: data.description,
                    selerName: user?.displayName,
                    email: user?.email,
                    postsTime: currTime,
                    location: data.location,
                    role: 'available'
                }

                fetch(`${process.env.REACT_APP_API_LIN}/addproduct`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(bookingData)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.acknowledged) {
                            toast.success("Product Added successfullly")
                            navigate('/dashboard/my-products')
                        }
                    })
            })
            .catch(err => console.log(err))


    }
    return (
        <div>
            <section class="bg-white dark:bg-gray-900">
                <div class="container flex items-center justify-center min-h-screen px-6 mx-auto">
                    <form onSubmit={handleSubmit(handleAdding)} className="w-full max-w-md">
                        <div class="flex items-center justify-center mt-6">
                            <a href="#" className="w-2/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white">
                                Product Adding Form
                            </a>
                        </div>

                        <div class="relative flex items-center mt-8">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input type="text" placeholder="Product name" className="input input-bordered w-full" {...register("productname")} />
                            </div>
                        </div>


                        <div class="relative flex items-center gap-5">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name='price' placeholder="Price" className="input input-bordered w-full"
                                    {...register("price")}
                                />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Original Price</span>
                                </label>
                                <input type="text" name='price' placeholder="OriginalPrice" className="input input-bordered w-full"
                                    {...register("originalPrice")}
                                />
                            </div>
                        </div>


                        <div class="relative flex items-center">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Product Image</span>
                                </label>
                                <input type="file" className="file-input file-input-bordered file-input-gray w-full"
                                    {...register("image")}
                                />
                            </div>
                        </div>

                        <div class="relative flex items-center gap-5 ">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Year Of Purchase</span>
                                </label>
                                <input type="text" placeholder="Purchase Year" className="input input-bordered w-full"
                                    {...register("pyear")}
                                />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Condition</span>
                                </label>
                                <select className="select select-bordered w-full " name='productType'
                                    {...register("condition")}
                                >
                                    <option value='excellent' selected>Excellent</option>
                                    <option value='good'>Good</option>
                                    <option value='fair'>Fair</option>
                                </select>
                            </div>
                        </div>


                        <div class="relative flex items-center ">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input type="text" placeholder="Location" className="input input-bordered w-full"
                                    {...register("location")}
                                />
                            </div>
                        </div>


                        <div class="relative flex items-center ">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Select Category</span>
                                </label>
                                <select className="select select-bordered w-full " name='productType'
                                    {...register("categori")}
                                >
                                    <option value='1' selected>vivo</option>
                                    <option value='2'>samsung</option>
                                    <option value='3'>iphone</option>
                                </select>
                            </div>
                        </div>


                        <div class="relative flex items-center ">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea className="textarea textarea-bordered" placeholder="Description"
                                    {...register("description")}
                                ></textarea>
                            </div>
                        </div>


                        <div class="mt-6">
                            <button
                                class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                type='submit'
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default AddAProduct;