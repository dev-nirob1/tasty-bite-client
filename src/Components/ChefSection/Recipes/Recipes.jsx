import React, { useState } from 'react';
import Ingredients from './Ingredients';
import { FaHeart } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Recipes = ({ recipe }) => {
    const { name, recipe_picture, ingredients, cookingMethod, rating } = recipe;
    console.log(recipe)
    const [disable, setDisable] = useState(false)
    const handleToast = () => {
        if (!disable) {
            toast.success('Recipe added successfully');
            setDisable(true);
        }
    };

    // console.log(recipe)
    return (
        <div className='border rounded-xl p-3 bg-gray-50'>
            <img className='h-96 w-full rounded-t-xl' src={recipe_picture} alt="food picture" />
            <div className='py-3'>
                <h3 className='my-2 text-xl md:text-2xl font-semibold text-gray-600'><span className='underline text-orange-500'>Recipe :</span> {name}</h3>
                <p className='underline text-orange-500'>Ingredients :</p>
                {
                    ingredients.map((ingredient, index) => <Ingredients ingredient={ingredient} key={index}></Ingredients>)
                }
                <p><span className='underline text-orange-500'>Cooking Method :</span> {cookingMethod}</p>
                <div className='flex justify-between mt-5'>
                    <p className="flex items-center">
                        <Rating
                            style={{ maxWidth: 150 }}
                            value={Math.round(rating || 0)} readOnly />
                        <span className='ms-2 text-xl'> {rating}</span>
                    </p>
                    <button onClick={handleToast} title='Add to favorite' className={`cursor-pointer text-xl ${disable ? "text-gray-500" : "text-red-500"
                        }`} disabled={disable}> <FaHeart></FaHeart></button>

                </div>

            </div>
            <div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Recipes;