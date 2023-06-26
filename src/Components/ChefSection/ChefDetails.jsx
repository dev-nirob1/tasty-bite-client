import React from 'react';
import { Link } from 'react-router-dom';

const ChefDetails = ({ singleChef }) => {
    const { name, picture, bio, numberOfRecipes, likes } = singleChef;

    return (
        <div>
            <div className='rounded-xl border p-3 bg-white'>
                <img className='w-full h-72 mx-auto' src={picture} alt="" />
                <h3>{name}</h3>
                <p>{bio}</p>
                <div className='flex justify-between'>
                    <p>{numberOfRecipes}</p>
                    <p>{likes}</p>
                </div>
                <Link to='/' className="text-white px-9 font-medium text-lg py-3 rounded-full bg-orange-500 hover:bg-orange-600">Our Chef</Link>
            </div>

        </div>
    );
};

export default ChefDetails;