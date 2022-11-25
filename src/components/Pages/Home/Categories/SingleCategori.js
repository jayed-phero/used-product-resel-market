import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CategoriRow from './CategoriRow';
import ProductModal from './ProductModal';

const SingleCategori = () => {
    const data = useLoaderData()
    const [product, setProduct] = useState(null)

    return (
        <div className='px-5 md:px-52 my-44 '>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-11 '>
                {
                    data.map(cateData =>
                        <CategoriRow key={cateData._id}
                            cateData={cateData}
                            setProduct={setProduct}
                        ></CategoriRow>
                    )
                }
            </div>
            {
                product &&
                <ProductModal
                    product={product}
                    setProduct={setProduct}
                />
            }
        </div>
    );
};

export default SingleCategori;