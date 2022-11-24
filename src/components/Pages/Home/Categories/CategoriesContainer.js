import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CategoriesContainer = () => {
    const [categories, setCategories] = useState([])

    useEffect( () => {
        fetch(`${process.env.REACT_APP_API_LIN}/products`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCategories(data)
        })
    } , [])

    return (
        <div className='md:px-52 px-5 py-16'>
            <div className='flex items-center justify-between flex-col gap-5'>
                <div className='text-center'>
                    <h3 className='text-3xl font-semibold '><span className='text-regal-yellow'>Fresh Mobile <br /></span> for Maximum Satisfaction</h3>
                    <p>Nullam sed ultricies erat, nec euismod metus. Morbi porttitor sapien vitae leo scelerisque. Nullam sed ultricies erat.</p>
                </div>
                <h3 className='px-12 py-3 border-2 border-regal-yellow bg-regal-yellow hover:bg-transparent'>Read More</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11 py-16'>
                {
                    categories.map(categori =>
                        <div key={categori._id} className=" bg-base-100 shadow-xl ">
                            <img src={categori.img} alt=""
                            className='w-full' />
                            <div className='flex items-center justify-between p-3 my-5'>
                                <h3 className='text-2xl font-semibold'>{categori.title}</h3>
                               <Link to={`categori/${categori._id}`}> <h3 className='px-7 rounded-xl py-2 border-2 border-regal-yellow bg-regal-yellow hover:bg-transparent'>See all</h3></Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default CategoriesContainer;