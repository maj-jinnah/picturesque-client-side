import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { _id, name, price, description, image } = service
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <PhotoProvider>
                    <PhotoView src={image}>
                        <figure>
                            <img className='h-80 w-96 rounded-b-xl' src={image} alt="" />
                        </figure>
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description.slice(0, 150) + "..."}</p>
                    <div className="card-actions justify-evenly items-center">
                        <h3 className='text-xl font-medium'>Price: {price}</h3>
                        <Link to={`/services/${_id}`}>
                            <button className="btn btn-primary">See More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;