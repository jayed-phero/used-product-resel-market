import React from 'react';

const SingleBookingData = ({data, i}) => {
    const {img, price, productName} = data
    return (
        <tr>
            <th>
                <label>
                    {i+1}
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <span className="badge badge-ghost badge-xl">{productName}</span>
            </td>
            <td>{price}</td>
            <th>
                <button className="btn btn-ghost bg-regal-yellow btn-sm">Pay</button>
            </th>
        </tr>
    );
};

export default SingleBookingData;