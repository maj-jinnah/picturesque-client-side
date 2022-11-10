import React, { useEffect, useState } from 'react';

const ReviewRow = ({ review, handelDelete }) => {

    const { _id, service, serviceName, message } = review;
    const [serviceData, setServiceData] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setServiceData(data))
    }, [service])



    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => { handelDelete(_id) }} className="btn btn-ghost">X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {
                                serviceData?.image &&
                                <img src={serviceData?.image} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        <div className="text-sm opacity-50">{serviceData?.price}</div>
                    </div>
                </div>
            </td>
            <td>
                {message}
            </td>
            <td>Purple</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default ReviewRow;