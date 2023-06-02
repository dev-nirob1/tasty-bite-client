import React from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleRegister = event => {
        event.preventDefault()

    }
    return (

        <div className='py-6 text-center w-3/4 mx-auto bg-gray-200'>
            <h2 className='text-4xl py-8 font-bold'>Welcome to Tasy<span className='text-orange-600'>Bite</span> </h2>

            <h3>Please Register</h3>

            <form onSubmit={handleRegister} className="flex flex-col justify-center px-4 py-8 mx-auto max-w-md">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered w-full max-w-md mb-4"
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered w-full max-w-md mb-4"
                    required
                />

                <div className="relative w-full max-w-md mb-4">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="input input-bordered w-full"
                        required
                    />
                    <button type="button" className="absolute top-1/2 right-2 transform -translate-y-1/2">
                        <FaEye />
                    </button>
                </div>

                <div className="relative w-full max-w-md mb-4">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="input input-bordered w-full"
                        required
                    />
                    <button type="button" className="absolute top-1/2 right-2 transform -translate-y-1/2">
                        <FaEye />
                    </button>
                </div>

                <input
                    type="text"
                    name="photoUrl"
                    placeholder="Photo URL"
                    className="input input-bordered w-full max-w-md mb-4"
                    required
                />

                <label className="cursor-pointer flex text-left">
                    <input type="checkbox" />
                    <span> <small> <Link to="terms" className='hover:underline text-blue-500 text-xs'>Terms and Conditions</Link> </small> </span>
                </label>

                <button type="submit" className="btn btn-primary mt-4">Register</button>

            </form>

            <p><small>Already have an account? <Link to="/login" className='hover:underline text-blue-500 text-xs'>login</Link> </small></p>

        </div>
    );
};

export default Register;