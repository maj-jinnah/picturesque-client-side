import React from 'react';

const ShowReview = ({ rev }) => {
    const { serviceName, customer, photo, message } = rev
    return (

        <div className='flex items-center justify-evenly bg-violet-400 my-4 mx-10 rounded-xl p-3'>
            <div className='flex items-center'>
                <div>
                    <img className='h-12 w-12 rounded-xl mr-3' src={photo} alt="" />
                </div>
                <div>
                    <div><h1 className='text-2xl font-semibold'>{serviceName}</h1></div>
                    <div><h3 className='text-lg font-medium'>{customer}</h3></div>
                </div>
            </div>
            <div className='text-xl'>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default ShowReview;