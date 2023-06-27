import React from 'react';
import { Link } from 'react-router-dom';

const ChefDetails = ({ singleChef }) => {
    const { name, picture, bio, numberOfRecipes, likes, id } = singleChef;

    return (
        <div>
            <div className='rounded-xl border p-3 bg-gray-50'>
                <img className='w-full h-72 mx-auto rounded-t-xl' src={picture} alt="chef image" />
                <div className='my-2'>
                    <h3 className='text-2xl font-semibold text-gray-900'>{name}</h3>
                    <p className='text-lg text-gray-700 my-2'>{bio}</p>
                    <div className='flex justify-between my-4'>
                        <p className='text-lg text-gray-800'>Number Of Recipe: {numberOfRecipes}</p>
                        <p className='text-lg text-gray-800'>Likes : {likes}</p>
                    </div>
                    <Link to={`/chefs/${id}`} className="text-white block w-fit px-9 font-medium text-lg py-3 rounded-lg bg-orange-500 hover:bg-orange-600">View Recipe</Link>
                </div>
            </div>

        </div>
    );
};

export default ChefDetails;