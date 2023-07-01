import React from 'react';
import Ingredients from './Ingredients';
import { FaHeart } from "react-icons/fa6";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Recipes = ({ recipe }) => {
    const { name, recipe_picture, ingredients, cookingMethod, rating } = recipe;
    // console.log(recipe)
    return (
        <div className='border rounded-xl p-3 bg-gray-50'>
            <img className='h-96 w-full rounded-t-xl' src={recipe_picture} alt="food picture" />
            <div className='py-3'>
                <h3 className='my-2 text-2xl font-semibold text-gray-600'><span className='underline text-orange-500'>Recipe :</span> {name}</h3>
                <p className='underline text-orange-500'>Ingredients :</p>
                {
                    ingredients.map((ingredient, index) => <Ingredients ingredient={ingredient} key={index}></Ingredients>)
                }
                <p><span className='underline text-orange-500'>Cooking Method :</span> {cookingMethod}</p>
                <div className='flex justify-between mt-5'>
                    
                    <p><Rating className='text-2xl' readOnly value={rating} /> {rating}</p>
                    <button title='Add to favorite' className='text-2xl text-red-500'><FaHeart></FaHeart></button>
                </div>
            </div>
        </div>
    );
};

export default Recipes;