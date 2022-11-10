import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { AuthContext } from '../contexts/AuthContext/AuthProvider';
import ReviewRow from './ReviewRow';

const MyReviews = () => {

    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    const [updateReview, setUpdateReview] = useState({})

    useEffect(() => {
        fetch(`https://picturesque-server-side.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    const handelDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to delete this review?")
        if (proceed) {
            fetch(`https://picturesque-server-side.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success("Successfully deleted!")
                        const remaining = reviews.filter(rev => rev._id !== id)
                        setReviews(remaining)
                    }
                })
        }

    }
    const getNrwReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const newReview = form.newReview.value;
        // console.log(newReview)
        setUpdateReview(newReview)
        console.log(updateReview)
        form.reset()
    }

    const handelUpdate = (id) => {
        console.log(updateReview)
        fetch(`https://picturesque-server-side.vercel.app/reviews/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success("Your review successfully updated!")

                    const remaining = reviews.filter(rev => rev._id !== id);
                    const changing = reviews.find(rev => rev._id === id);
                    const currentRev = [changing, ...remaining];
                    setReviews(currentRev);

                }
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <Helmet>
                <title>My Reviews - Picturesque</title>
            </Helmet>
            <div>
                {
                    (reviews.length === 0) ?
                        <h1 className='text-3xl font-semibold text-center my-36'>No reviews were added</h1> :
                        <div>
                            <h1 className='text-3xl my-5 font-semibold text-center'>You Have {reviews.length} reviews</h1>
                            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                {
                                    reviews.map(review => <ReviewRow
                                        key={review._id} review={review} handelDelete={handelDelete} handelUpdate={handelUpdate} getNrwReview={getNrwReview}
                                    ></ReviewRow>)
                                }
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default MyReviews;
