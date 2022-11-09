import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../contexts/AuthContext/AuthProvider';


const ServiceDetails = () => {
    const { user } = useContext(AuthContext)
    const service = useLoaderData()
    const { _id, name, price, description, image } = service;

    const handelSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const message = form.review.value;
        
        const review ={
            service: _id,
            serviceName: name,
            customer: user?.displayName,
            photo: user?.photoURL,
            email: user?.email,
            message
        }
    }

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

            <div className='mx-auto text-center'>
                <form onSubmit={handelSubmit} className="flex items-center justify-center">
                    <textarea name="review" className="textarea textarea-success w-2/4" placeholder="Please, write your review here."></textarea>
                    <input className='btn btn-primary ml-5' type="submit" value="Submit Review" />
                </form>
            </div>
        </div>
    );
};

export default ServiceDetails;