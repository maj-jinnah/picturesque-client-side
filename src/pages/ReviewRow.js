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
            <td></td>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-2">Please write down your review!</h3>
                    <textarea name="review" className="textarea textarea-success w-3/4" placeholder="write your review here." required></textarea>
                    <div className="modal-action">
                        <button><label htmlFor="my-modal" className="btn btn-ghost">Submit!</label></button>
                    </div>
                </div>
            </div>
            <th>
                <button><label htmlFor="my-modal" className="btn btn-ghost btn-xs">Edit Review</label></button>
            </th>
        </tr>
    );
};

export default ReviewRow;