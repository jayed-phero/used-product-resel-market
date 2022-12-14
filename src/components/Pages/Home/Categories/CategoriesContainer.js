import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../../../../hooks/Scrool-to-top';

const CategoriesContainer = () => {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch(`${process.env.REACT_APP_API_LIN}/categories`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCategories(data)
                setLoading(false)
            })
    }, [])

    return (
        <div id='categori' className='md:px-52 px-5 py-16 '>
            <ScrollToTop />
            <div className='flex items-center justify-between flex-col gap-5'>
                <div className='flex flex-col justify-center items-center text-center'>
                    <h3 className='text-3xl font-semibold '><span className='text-regal-yellow'>Fresh Mobile <br /></span> for Maximum Satisfaction</h3>
                    <p className='w-2/3 pt-5'>Nullam sed ultricies erat, nec euismod metus. Morbi porttitor sapien vitae leo scelerisque. Nullam sed ultricies erat.</p>
                </div>
                <h3 className='px-12 py-3 border-2 border-regal-yellow bg-regal-yellow hover:bg-transparent'>Browes Products</h3>
            </div>
            {
                loading ?
                    <div className='flex items-center justify-center text-center'>
                        <div className="w-16 h-16 border-4 mt-20 border-dashed rounded-full animate-spin border-violet-400"></div>
                    </div>
                    :
                    <>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11 py-16'>
                            {
                                categories.map(categori =>
                                    <div key={categori._id} className=" bg-base-100 shadow-xl ">
                                        <img src={categori.img} alt=""
                                            className='w-full' />
                                        <div className='flex items-center justify-between p-3 my-5'>
                                            <h3 className='text-2xl font-semibold'>{categori.title}</h3>
                                            <Link to={`categori/${categori.categori_id}`}> <h3 className='px-7 rounded-xl py-2 border-2 border-regal-yellow bg-regal-yellow hover:bg-transparent'>See all</h3></Link>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </>
            }
        </div>
    );
};

export default CategoriesContainer;