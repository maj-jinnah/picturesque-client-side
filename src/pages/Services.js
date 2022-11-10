import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const services = useLoaderData()
    return (
        <div>
            <Helmet>
                <title>Services - Picturesque</title>
            </Helmet>
            <h1 className='text-4xl font-semibold text-center my-5'>Services I'm providing right now!</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10 mx-5'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;