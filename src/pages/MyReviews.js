import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../contexts/AuthContext/AuthProvider';
import ReviewRow from './ReviewRow';

const MyReviews = () => {

    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    const handelDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to delete this review?")
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount > 0){
                        toast.success("Successfully deleted!")
                        const remaining = reviews.filter(rev => rev._id !== id)
                        setReviews(remaining)
                    }
                })
        }

    }

    return (
        <div>
            <h1 className='text-3xl my-5 font-semibold text-center'>You Have {reviews.length} reviews</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <h1 className='text-red-400 text-base'>Delete</h1>
                                </label>
                            </th>
                            <th>Service Name</th>
                            <th>Review</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            reviews.map(review => <ReviewRow key={review._id} review={review} handelDelete={handelDelete}></ReviewRow>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyReviews;