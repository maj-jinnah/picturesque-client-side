import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData()
    const { _id, name, price, description, image } = service;
    return (
        <div>
            <h1 className='text-4xl font-bold text-center mt-5'>{name}</h1>
            <img className='h-2/5 w-2/4 mx-auto mt-5 rounded-2xl' src={image} alt="" />
            <p className='w-3/4 mx-auto mt-5'>{description}</p>
        </div>
    );
};

export default ServiceDetails;