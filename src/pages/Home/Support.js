import React from 'react';
import support from "../../assets/home img/support.jpg"

const Support = () => {
    return (
        <div>
            <div className='text-center my-8'>
                <h1 className='font-medium text-3xl'>Trusted by the World's Best Photographers</h1>
                <p className=''>Whether you shoot landscapes, people, architecture, or weddings,<br /> you're in good company on Picturesque.</p>
            </div>
            <div className="hero  bg-base-200 mt-5 pt-3">
                <div className="hero-content flex-col md:flex-row">
                    <img src={support} className="w-2/4 rounded-lg shadow-2xl" alt='' />
                    <div>
                        <small>24/7 SUPPORT</small>
                        <h1 className="text-4xl font-bold">Award-Winning, Expert Customer Care.</h1>
                        <p className="py-6 ">Get personalized support from our Customer Care Team via email or live chat. Customer Care Advisors are highly trained and work with Designers and Engineers in our New York City, Dublin, and Portland offices. They have deep Squarespace knowledge and are ready to help whenever you need it. Reach out any time — we're here 24/7.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;