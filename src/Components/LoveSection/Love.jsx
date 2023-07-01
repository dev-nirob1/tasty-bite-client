import React from 'react';
import { FaHeart, } from "react-icons/fa6"

const Love = () => {
    return (
        <div className='my-10 container mx-auto'>
            <h2 className='text-4xl font-semibold flex my-10 justify-center'>Why People  <FaHeart className='text-red-600 mx-3'></FaHeart>  <span className='text-[#FF5733] underline'>TastyBite</span></h2>

            <div className='grid grid-cols-3 gap-8'>
                <div className='relative'>
                    <img src="/public/ingredients (1).jpg" alt="ingredients image" />
                    <div className='bg-gray-50 text-center absolute bottom-0 p-8 opacity-0 hover:opacity-75'>
                        <h3 className='text-3xl text-gray-800 opacity-100'>Fresh Ingredients</h3>
                        <p className='text-lg text-gray-700 opacity-100'>At Tasty Bite, we pride ourselves on sourcing only the freshest ingredients to ensure that every bite of our culinary creations is bursting with flavor and quality.</p>
                    </div>
                </div>
                <div className='relative'>
                    <img className='bg-gray-200' src="/public/chef.png" alt="chef image" />
                    <div className='bg-gray-50 text-center absolute bottom-0 p-8 opacity-0 hover:opacity-75'>
                        <h3 className='text-3xl text-gray-800 opacity-100'>Best Chef</h3>
                        <p className='text-lg text-gray-700 opacity-100'>Our team of highly skilled chefs brings their expertise and passion to every dish, striving to create culinary masterpieces that will delight your taste buds.</p>
                    </div>
                </div>
                <div className='relative'>
                    <img className='bg-gray-200' src="/public/delivery.jpg" alt="delivery image" />
                    <div className='bg-gray-50 text-center absolute bottom-0 p-8 opacity-0 hover:opacity-75'>
                        <h3 className='text-3xl text-gray-800 opacity-100'>Fast Delivery</h3>
                        <p className='text-lg text-gray-700 opacity-100'>We understand the importance of timely service. With our fast delivery options, you can enjoy your favorite meals from Tasty Bite without waiting too long.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Love;