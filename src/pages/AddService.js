import React from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { json } from 'react-router-dom';

const AddService = () => {

    const handelSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const price = form.price.value
        const image = form.image.value
        const description = form.description.value
        console.log(name, image, price, description)

        const service = {
            name,
            price,
            image,
            description
        }

        fetch('https://picturesque-server-side.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success("Your service successfully added!")
                    form.reset();
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <Helmet>
                <title>Add Service - Picturesque</title>
            </Helmet>
            <h1 className='text-center text-3xl font-semibold my-5'>Want to add a new service? Just fill the form bellow!</h1>

            <form onSubmit={handelSubmit}>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-3 mx-auto w-3/5'>
                    <input type="text" name='name' placeholder="Service Name" className="input input-bordered w-full max-w-xs" required />
                    <input type="text" name='price' placeholder="Price (please include $sign)" className="input input-bordered w-full max-w-xs" required />
                    <input type="text" name='image' placeholder="Image" className="input input-bordered w-full max-w-xs" required />
                    <input type="text" name='description' placeholder="Description" className="input input-bordered w-full max-w-xs" required />
                    <button className="btn btn-primary mx-auto">Add to Service</button>
                </div>
            </form>

        </div>
    );
};

export default AddService;