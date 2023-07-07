import React from 'react';
import { FaAddressCard, FaEnvelope, FaMobile } from "react-icons/fa";


const Information = () => {
    return (
        <div className='container mx-auto my-10  bg-gray-50'>
            <h2 className='text-gray-900 text-center text-4xl font-semibold underline py-8 md:py-10'>More Information</h2>
            <div className='flex flex-col md:flex-row items-center mx-3 md:mx-0 gap-8 rounded-mdpy-8 md:py-10'>
                <div className='w-full md:w-1/2'>
                    <img className='rounded' src="https://i.ibb.co/pK4dBhw/resturant.jpg" alt="restaurant image" />
                </div>
                <div className='w-full md:w-1/2 p-5'>
                    <h2 className='text-4xl font-semibold text-gray-900'>Order Now Your Food and <br /> we'll deliver it fast</h2>
                    <p className='text-lg font-medium my-4 text-gray-700'>Explore texture, color, and of course, the ultimate tastes with our menu of the season. All the ingredients are fresh and carefully selected by our chefs. Enjoy an extraordinary dining experience.</p>
                    <div className='flex items-center gap-2 mb-2'>
                        <h4 className='text-lg font-medium text-gray-800 flex items-center gap-1'><FaMobile className='text-orange-500'/><span>Phone:</span></h4>
                        <p className='font-medium text-gray-600'>+93434424235</p>
                    </div>
                    <div className='flex items-center gap-2 mb-2'>
                        <h4 className='text-lg font-medium text-gray-800 flex items-center gap-1'><FaEnvelope className='text-orange-500'/><span>Email:</span></h4> <p className='font-medium text-gray-600'>example.res@gmail.com</p>
                    </div>
                    <div className='flex items-center gap-2 mb-2'>
                        <h4 className='text-lg font-medium text-gray-800 flex items-center gap-1'><FaAddressCard className='text-orange-500'/> <span>Address:</span></h4> <p className='font-medium text-gray-600'>123 Main Street City, State, France</p>
                    </div>
                    <a href="#chef" className="text-white mt-5 block px-9 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-lg font-medium w-fit md:w-max">Let's Explore</a>
                </div>
            </div>
        </div>
    );
};

export default Information;
