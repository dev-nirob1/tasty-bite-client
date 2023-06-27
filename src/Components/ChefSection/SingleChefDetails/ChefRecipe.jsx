import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefRecipe = () => {
    const chefRecipeDetails = useLoaderData();
    const {recipes, bio} = chefRecipeDetails;

    console.log(chefRecipeDetails)
    return (
        <div>
            <img src={recipes[0].recipe_picture} alt="" />
        </div>
    );
};

export default ChefRecipe;