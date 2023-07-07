import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const { createUser } = useContext(AuthContext);

    const navigate = useNavigate();
    const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*\d)(?=.*[A-Z]).{6,}$/;

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photoUrl.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        setError('');
        setSuccess('');

        if (name === '') {
            setError('Please provide your name');
            return;
        } else if (photoUrl === '') {
            setError('Please fill the photoUrl field');
            return;
        } else if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        } else if (password.length < 6) {
            setError('Your password must be at least 6 characters long');
            return;
        } else if (!passwordRegex.test(password)) {
            setError(
                'Password must contain at least one special character, one number, and one capital letter'
            );
            return;
        }
        else if (!isChecked) {
            setError('Please accept the Terms and Conditions');
            return;
        }

        createUser(email, password)
            .then((result) => {
                const loggedUser = result.user;
                setSuccess('Registration successful');
                // console.log(loggedUser);
                form.reset();
                navigate('/');
            })
            .catch((error) => {
                // console.log(error.message);
                setError(error.message);
            });
    };

    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    }

    return (
        <div className="py-6 text-center md:w-3/4 mx-auto bg-gray-200">
            <h2 className="text-3xl md:text-4xl md:py-8 font-bold">
                Welcome to Tasty<span className="text-orange-600">Bite</span>
            </h2>

            <form
                onSubmit={handleRegister}
                className="flex flex-col justify-center px-4 py-8 mx-auto max-w-md"
            >
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
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="Password"
                        className="input input-bordered w-full"
                        required
                    />
                    <button
                        onClick={handlePasswordVisibility}
                        type="button"
                        className="absolute top-1/2 right-2 transform -translate-y-1/2"
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>

                <div className="relative w-full max-w-md mb-4">
                    <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className="input input-bordered w-full"
                        required
                    />
                    <button
                        onClick={handleConfirmPasswordVisibility}
                        type="button"
                        className="absolute top-1/2 right-2 transform -translate-y-1/2"
                    >
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>

                <label className="cursor-pointer flex items-center text-left">
                    <input type="checkbox"
                        name="checkBox"
                        checked={isChecked}
                        onChange={handleCheckboxChange} />
                    <span className='ms-1'>
                        <small>Accept Terms and Conditions</small>
                    </span>
                </label>

                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}

                <button type="submit" disabled={!isChecked} className="btn btn-primary mt-4">
                    Register
                </button>
            </form>

            <p>
                <small>
                    Already have an account?
                    <Link to="/login" className="hover:underline text-blue-500 text-xs">
                        login
                    </Link>
                </small>
            </p>
        </div>
    );
};

export default Register;
