import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleCategori = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <h3>{data.title}</h3>
        </div>
    );
};

export default SingleCategori;