import React, { useContext, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {

    const [error, setError] = useState('')
    const {createUser} = useContext(AuthContext)
    const from = location.state?.from?.pathname || '/';

    const navigate = useNavigate()
    const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*\d)(?=.*[A-Z]).{6,}$/;


    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photoUrl.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        // form.reset('')
        setError('')
        navigate(from, { replace: true })

        if(password !== confirmPassword){
            setError('Password did not matched')
            return
        }
        if (password.length < 6) {
            setError(`Your password must be 6 digits or more`)
            return
        }
        if (!passwordRegex.test(password)) {
          setError(
            'Password must contain at least one special character, one number, and one capital letter'
          );
          return;
        }

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
          })
          .catch(error =>{
            console.log(error.message)
            setError(error.message)
            
          })
    }
    return (

        <div className='py-6 text-center md:w-3/4 mx-auto bg-gray-200'>
            <h2 className='text-3xl md:text-4xl md:py-8 font-bold'>Welcome to Tasty<span className='text-orange-600'>Bite</span> </h2>

            {/* <h3>Please Register</h3> */}

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

                <input
                    type="text"
                    name="photoUrl"
                    placeholder="Photo URL"
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
                        name="confirmPassword"
                        placeholder="Password"
                        className="input input-bordered w-full"
                        required
                    />
                    <button type="button" className="absolute top-1/2 right-2 transform -translate-y-1/2">
                        <FaEye />
                    </button>
                </div>

                <label className="cursor-pointer flex text-left">
                    <input type="checkbox" />
                    <span> <small>  Terms and Conditions</small> </span>
                </label>
                    <p>{error}</p>
                <button type="submit" className="btn btn-primary mt-4">Register</button>

            </form>

            <p><small>Already have an account? <Link to="/login" className='hover:underline text-blue-500 text-xs'>login</Link> </small></p>

        </div>
    );
};

export default Register;