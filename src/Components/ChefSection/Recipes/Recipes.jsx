import React from 'react';
import Ingredients from './Ingredients';

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
                    ingredients.map(ingredient => <Ingredients ingredient={ingredient}></Ingredients>)
                }
                <p><span className='underline text-orange-500'>Cooking Method :</span> {cookingMethod}</p>
                <div className='flex justify-between mt-5'>
                    <p>{rating}</p>
                    <button className="text-white block w-fit px-9 font-medium text-lg py-3 rounded-lg bg-orange-500 hover:bg-orange-600">Add To Favorite</button>
                </div>
            </div>
        </div>
    );
};

export default Recipes;