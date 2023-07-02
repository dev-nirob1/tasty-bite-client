import React, { useContext, useState } from 'react';
import { FaEye, } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const { login } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset('')

        login(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                setSuccess('welcome')
                form.reset('')
                navigate(from, { replace: true })
            })
            .catch(error => {
                const errorMessage = error.message
                console.error(errorMessage)
                setError(error.message)
            })

    }

    return (
        <div className='text-center py-10 w-3/4 mx-auto bg-gray-200'>
            <div className='w-3/4 mx-auto'>
                <h2 className='text-4xl py-6 font-bold'>Welcome to Tasy<span className='text-orange-600'>Bite</span> </h2>

                <h3 className='text-3xl font-semibold mb-3'>Please login</h3>
                <div>

                    <div className='flex flex-col  w-full max-w-md mx-auto'>
                        <button className='btn btn-primary mx-4 hover:btn-outline mb-4'>Continue With Google</button>

                        <button className='btn btn-outline mx-4 mb-4'>Continue With Github</button>
                    </div>

                    <p><small>or</small></p>

                    <form onSubmit={handleLogin} className="flex flex-col px-4 py-6 mx-auto max-w-md">
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
                        <p>{success}</p>
                        <p>{error}</p>

                        <div className='flex justify-between mt-3'>
                            <label className="cursor-pointer">
                                <input type="checkbox" />
                                <span> <small> <Link to="terms" className='hover:underline text-blue-500 text-xs'> Terms and Conditions</Link> </small> </span>
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