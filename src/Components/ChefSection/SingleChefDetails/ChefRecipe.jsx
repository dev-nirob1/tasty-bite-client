import { useLoaderData } from 'react-router-dom';
import Recipes from '../Recipes/Recipes';

const ChefRecipe = () => {
    const chefRecipeDetails = useLoaderData();
    const {
        name,
        description,
        banner_picture,
        yearsOfExperience,
        numberOfRecipes,
        achievements,
        nationality,
        age,
        likes,
        recipes
    } = chefRecipeDetails;


    return (
        <div className='container mx-auto my-10'>

            <div className='md:flex gap-6 items-center mx-3 md:mx-0'>
                <div className='md:w-1/2'>
                    <img className='w-full md:h-[450px]' src={banner_picture} alt="chef image" />
                </div>
                <div className='md:w-1/2'>
                    <h2 className='my-2 text-2xl font-semibold text-gray-600'><span className='underline text-orange-500'>Name :</span> {name}</h2>

                    <div className='flex gap-5'>
                        <p className='my-2 text-medium md:text-lg font-medium text-gray-500'> <span className='underline text-orange-500'>Nationality :</span> {nationality}</p>

                        <p className='my-2 text-medium md:text-lg font-medium text-gray-500'> <span className='underline text-orange-500'>Age :</span> {age}</p>
                    </div>

                    <p className='my-2 text-medium md:text-lg font-medium text-gray-500'><span className='underline text-orange-500'>About Him :</span> {description}</p>
                    <p className='my-2 text-medium md:text-lg font-medium text-gray-500'><span className='underline text-orange-500'>Achievements :</span> {achievements}</p>

                    <div className='flex items-center gap-10 text-center'>
                        <div>
                            <p className='mt-1 text-medium md:text-lg font-medium text-gray-500'>{yearsOfExperience} Years</p>
                            <p className='underline text-orange-500 text-medium md:text-lg font-medium'>Experiences</p>
                        </div>
                        <div>
                            <p className='mt-1 text-medium md:text-lg font-medium text-gray-500'>{numberOfRecipes}</p>
                            <p className='underline text-orange-500 text-medium md:text-lg font-medium'>Recipe Numbers</p>
                        </div>
                        <div>
                            <p className='mt-1 text-lg font-medium text-gray-500'>{likes}</p>
                            <p className='underline text-orange-500 text-medium md:text-lg font-medium'>Likes</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-10 mx-3 md:mx-0'>
                <h2 className='text-center text-3xl font-semibold underline'>Best Reciepes</h2>

                <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-5'>
                    {
                        recipes.map((recipe) => <Recipes recipe={recipe} key={recipe.id}></Recipes>)
                    }

                </div>
            </div>

        </div>
    );
};

export default ChefRecipe;