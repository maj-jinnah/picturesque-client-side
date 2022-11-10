import React, { useEffect, useState } from 'react';

const ReviewRow = ({ review, handelDelete, handelUpdate, getNrwReview }) => {

    const { _id, service, serviceName, message } = review;
    const [serviceData, setServiceData] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setServiceData(data))
    }, [service])

    return (

        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={serviceData?.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{serviceName}</h2>
                    <p>{message}</p>
                    <div className="card-actions justify-evenly items-center">
                        <p className="text-base opacity-90">Price {serviceData?.price}</p>
                        <button><label htmlFor="my-modal" className="btn btn-ghost">Edit Review</label></button>
                        <button onClick={() => { handelDelete(_id) }} className="btn btn-ghost">Delete</button>
                    </div>
                </div>
            </div>

            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <form onSubmit={getNrwReview} className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Please write yur new review!</h3>
                    <textarea name="newReview" className="textarea textarea-success w-3/4" placeholder="Please, write your review here." required></textarea>
                    <div className="modal-action">
                        <button onClick={()=>handelUpdate(_id)}><label htmlFor="my-modal" className="btn btn-ghost">Submit</label></button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ReviewRow;