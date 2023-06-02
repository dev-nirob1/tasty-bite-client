import React from 'react';
import { FaEye, } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }

    return (
        <div className='text-center py-10 w-3/4 mx-auto bg-gray-200'>
            <div className='w-3/4 mx-auto'>
                <h2 className='text-4xl py-8 font-bold'>Welcome to Tasy<span className='text-orange-600'>Bite</span> </h2>
                <div>

                    <div className='flex flex-col w-full max-w-md mx-auto'>
                        <button className='btn btn-primary w-full hover:btn-outline mb-4'>Continue With Google</button>

                        <button className='btn btn-outline w-full mb-4'>Continue With Github</button>
                    </div>

                    <p><small>or</small></p>

                    <form onSubmit={handleLogin} className="flex flex-col px-4 py-8 mx-auto max-w-md">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="input input-bordered w-full max-w-md mb-4"
                            required
                        />

                        <div className="relative w-full max-w-md">
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

                        <div className='flex justify-between mt-3'>
                            <label className="cursor-pointerflex text-left">
                                <input type="checkbox" />
                                <span> <small> <Link to="terms" className='hover:underline text-blue-500 text-xs'>Terms and Conditions</Link> </small> </span>
                            </label>

                            <span> <small className='hover:bg-blue500 hover:underline text-xs cursor-pointer'>Forget password</small> </span>

                        </div>

                        <button type="submit" className="btn btn-primary mt-4">Login</button>
                    </form>

                    <p><small>Not a member? <Link to="/register" className='hover:underline text-blue-500 text-xs'>Register</Link> </small></p>

                </div>
            </div>
        </div>
    );
};

export default Login;