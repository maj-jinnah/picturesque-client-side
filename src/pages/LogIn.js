import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext/AuthProvider';

const LogIn = () => {

    const [error, setError] = useState('')
    const { googleProviderSignIn, githubProviderSignIn, signInUser } = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const handelSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                toast.success('Successfully LogIn')
            })
            .catch(error => {
                console.error(error);
                setError(error);
            })
    }
    const handelGoogleSignIn = () => {
        googleProviderSignIn(googleProvider)
            .then((result) => {
                const user = result.user
                console.log(user)
            })
            .catch((error) => {
                console.error(error)
            })
    }
    const handelGithubSignIn = () => {
        githubProviderSignIn(githubProvider)
            .then((result) => {
                const user = result.user
                console.log(user)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelSubmit} className="card-body">
                        <h1 className=" mx-16 text-4xl font-bold">Login now</h1>
                        <p className='text-center'>Log in to access your account</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" />
                            <label className="label">
                                <p className='text-red-600'>{error}</p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Log In</button>
                            <p className='text-center mt-3'>Don't have an account yet? <Link to='/register'> <span className='text-violet-800'>Register Now</span></Link></p>
                        </div>


                        <div className="flex items-center w-full my-4">
                            <hr className="w-full dark:text-gray-400" />
                            <p className="px-3 dark:text-gray-400">OR</p>
                            <hr className="w-full dark:text-gray-400" />
                        </div>

                        <div className='flex flex-col'>
                            <button onClick={handelGoogleSignIn} className="btn btn-primary mb-5"><FaGoogle className='text-xl mr-3'></FaGoogle>Login with Google</button>
                            <button onClick={handelGithubSignIn} className="btn btn-primary"><FaGithub className='text-xl mr-3'></FaGithub> Login with Github</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default LogIn;