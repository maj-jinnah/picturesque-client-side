import React, { useContext, useEffect, useState } from 'react';
import { json, Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../contexts/AuthContext/AuthProvider';
import toast from 'react-hot-toast';
import ShowReview from './ShowReview';


const ServiceDetails = () => {
    const { user } = useContext(AuthContext)
    const service = useLoaderData()
    const [preReviews, setPreReviews] = useState([])

    const { _id, name, price, description, image } = service;

    const handelSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const message = form.review.value;

        const review = {
            service: _id,
            serviceName: name,
            customer: user?.displayName,
            photo: user?.photoURL,
            email: user?.email,
            message
        }
        if (!user?.uid) {
            toast.error('Please login to add a review');
            return;
        }
        else {
            fetch('http://localhost:5000/reviews', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(review)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.acknowledged) {
                        toast.success("Your review successfully submitted!")
                        form.reset();
                    }
                })
                .catch(error => console.log(error))
        }

    }


    useEffect(() => {
        fetch(`http://localhost:5000/review?service=${_id}`)
            .then(res => res.json())
            .then(data => {
                setPreReviews(data)
            })
    }, [_id])



    return (
        <div>
            <h1 className='text-4xl font-bold text-center mt-5'>{name}</h1>
            <PhotoProvider>
                <PhotoView src={image}>
                    <img className='h-2/5 w-2/4 mx-auto mt-5 rounded-2xl' src={image} alt="" />
                </PhotoView>
            </PhotoProvider>
            <p className='w-3/4 mx-auto mt-5'>{description}</p>
            <div className='flex justify-evenly my-8'>
                <h1 className='text-3xl font-semibold'>{price}</h1>
                <h1 className='text-3xl font-semibold'>Reviews</h1>
            </div>

            <div>
                <h1 className='text-xl font-semibold text-center my-3'>We have {preReviews.length} reviews right now in this service.</h1>
                {
                    preReviews.map(rev => <ShowReview key={rev._id} rev={rev}></ShowReview>)
                }
            </div>

            <div className='mx-auto text-center'>
                <form onSubmit={handelSubmit} className="flex items-center justify-center">
                    <textarea name="review" className="textarea textarea-success w-2/4" placeholder="Please, write your review here." required></textarea>
                    <input className='btn btn-primary ml-5' type="submit" value="Submit Review" />
                </form>
            </div>
        </div>
    );
};

export default ServiceDetails;