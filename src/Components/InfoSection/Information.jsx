import React from 'react';
import { Link } from 'react-router-dom';

const Information = () => {
    return (
        <div className='container mx-auto my-10 flex items-center gap-8 bg-gray-50 rounded-md'>
            <div className='w-1/2'>
                <img className='rounded-s' src="/public/resturant.jpeg" alt="resturant image" />
            </div>
            <div className='w-1/2 p-5'>
                <h2 className='text-4xl font-semibold text-gray-900'>Order Now Your Food and <br /> we'll deliver it fast</h2>
                <p className='text-lg font-medium my-4 text-gray-700'>Explore texture, color and of course the ultimate tastes with our menu of the season. All the ingredients are fresh and carefully selected by our chefs. Enjoy an extra ordinary dinning experience</p>
                <div className='flex gap-2'>
                    <h4 className='text-lg font-medium text-gray-800'>Phone :</h4> <p className='font-medium text-gray-600'>+93434424235</p>
                </div>
                <div className='flex gap-2'>
                    <h4 className='text-lg font-medium text-gray-800'>Email :</h4> <p className='font-medium text-gray-600'>example.res@gmail.com</p>
                </div>
                <div className='flex gap-2'>
                    <h4 className='text-lg font-medium text-gray-800'>adress :</h4> <p className='font-medium text-gray-600'>new York city</p>
                </div>
                <a href="#chef" className="text-white mt-5 block w-fit px-9 font-medium text-lg py-3 rounded-full bg-orange-500 hover:bg-orange-600">Let's Explore</a>
            </div>
        </div>
    );
};

export default Information;