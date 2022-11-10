import React from 'react';
import Carousel from './Carousel';
import weeding from '../../assets/home img/weeding.jpg'
import animal from '../../assets/home img/animal.jpg'
import Gallery from './Gallery';
import Support from './Support';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const services = useLoaderData()
    return (
        <div>
            <Helmet>
                <title>Picturesque</title>
            </Helmet>
            <Carousel></Carousel>
            <h1 className='text-center font-bold text-3xl mt-5'>Services we are providing right now!</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10 mx-5'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className='text-center'>
                <Link to='/services'>
                    <button className="btn btn-primary px-7 text-base mb-5">See More</button>
                </Link>
            </div>
            <div className="hero  bg-base-200 mt-5 pt-3">
                <div className="hero-content flex-col md:flex-row">
                    <img src={weeding} className="w-2/4 rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-4xl font-bold">Weeding Photography!</h1>
                        <p className="py-6 ">Highlight your best photos of florals in this fun florist feature. (You're welcome for that delightful alliterative experience.) Don't forget to showcase centerpieces, boutonnieres, aisle runners, and any other fun florals you can think of!</p>
                    </div>
                </div>
            </div>
            <div className="hero  bg-base-200 pb-3">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <img src={animal} className="w-2/4 rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-4xl font-bold">Wildlife Photography!</h1>
                        <p className="py-6">Wildlife photography is one of the most challenging and rewarding subjects to explore with your camera. From intimate interactions to majestic migrations, it challenges us both technically and creatively to capture meaningful images that tell the stories of animal life in wild places.</p>
                    </div>
                </div>
            </div>
            <Gallery></Gallery>
            <Support></Support>
        </div>
    );
};

export default Home;