import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {
    const { user, logOut, loading } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(result => { })
            .catch(() => {
                console.log('something went wrong')
            })
    }

    return (
        <div>
            <div className="navbar bg-gray-900 text-[#FF5733] ">
                <div className="navbar-start container mx-auto h-1/2">
                    <div className="dropdown ">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul className="menu menu-sm dropdown-content mt-2 px-2 py-5 shadow bg-[#333333] rounded w-72">
                            <li>
                                <NavLink className='py-3' to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink className='py-3' to="/blog">Blog</NavLink>
                            </li>
                            <li>
                                <NavLink className='py-3' to="/about">About</NavLink>
                            </li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-2xl md:text-3xl">TasyBite</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        <li className='hover:overline hover:transition-all duration-500 font-semibold'><NavLink to="/">Home</NavLink></li>
                        <li className='hover:overline hover:transition-all duration-500 font-semibold'><NavLink to="/blog">Blog</NavLink></li>
                        <li className='hover:overline hover:transition-all duration-500 font-semibold'><NavLink to="/about">About</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <><img className='w-9 h-9 mr-2 md:mr-5 rounded-full' title={user?.displayName} src={user?.photoURL} alt="profile image" /><button onClick={handleLogout} className="px-6 md:px-8 py-3 font-semibold text-lg rounded-full text-white bg-orange-500 hover:bg-white hover:text-orange-500">Logout</button></>
                            :
                            <>
                                {
                                    loading && <button className="px-8 py-3 font-semibold text-lg rounded-full text-white bg-orange-500 hover:bg-white hover:text-orange-500"></button>
                                }
                                {!loading && <Link to="/login" className="px-8 py-3 font-semibold text-lg rounded-full text-white bg-orange-500 hover:bg-white hover:text-orange-500">Login</Link>}

                            </>
                    }
                </div>
            </div>
        </div >
    );
};

export default Header;