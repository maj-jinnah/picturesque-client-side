import React, { useContext } from 'react';
import photo from '../../../assets/photography.png'
import { FaBars, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handelLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className="navbar bg-slate-500 px-5 md:px-10">
            <div className="flex-1">
                <img className='h-11 w-11 mr-2' src={photo} alt="" />
                <div className='text-white text-4xl font-semibold'>
                    <h1>Picturesque</h1>
                </div>
            </div>
            <div className="flex-none gap-2">
                <ul className='flex gap-8 p-2 text-white text-lg hidden md:flex'>

                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/blog'>Blogs</Link></li>
                    {
                        user?.uid ?
                            <li><button onClick={handelLogOut}>LogOut</button></li> :
                            <li><Link to='/login'>LogIn</Link></li>
                    }
                </ul>
                <div className='hidden md:flex items-center'>

                    {user?.photoURL ?
                        <img className='rounded-xl' style={{ hight: '30px', width: '30px' }} src={user.photoURL} alt='' title={user?.displayName}></img> :
                        <FaUser></FaUser>
                    }

                </div>

                <div className="dropdown dropdown-end md:hidden">
                    <label tabIndex={0} className="btn btn-ghost ">
                        <div className="w-10 rounded-full">
                            
                            {user?.photoURL ?
                                <img className='rounded-lg' style={{ hight: '40px', width: '40px' }} src={user.photoURL} alt='' title={user?.displayName}></img> :
                                <FaBars className='text-2xl mx-auto' />
                            }
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        {<p>{user?.displayName}</p>}
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to='/blog'>Blogs</Link></li>

                        {
                            user?.uid ?
                                <li><button onClick={handelLogOut}>LogOut</button></li> :
                                <li><Link to='/login'>LogIn</Link></li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;