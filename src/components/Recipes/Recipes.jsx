import './Recipes.css'
import PropTypes from 'prop-types'
import { CiClock2 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";
const Recipes = ({ recipe , handleWantsToCook}) => {

    const { recipe_name, short_description, recipe_image, ingredients, preparing_time, calories } = recipe;



    return (
        <div className='recipes-container'>
            <img src={recipe_image} alt="" />
            <h2 className='text-xl font-semibold my-2 text-[#282828]'>{recipe_name}</h2>
            <p className=' my-2 text-[#878787]'>{short_description}</p>
            <hr />
            <div className=' my-2'>
                <h3 className='text-lg font-medium text-[#282828]'>Ingredients:{ingredients.length}</h3>
                    {
                        ingredients.map((ingredient, idx) => <li className='text-base text-[#878787] ml-5' key={idx}>{ingredient}</li>)
                    }
            </div>
            <div className='time-and-calories my-2'>
                <p className='flex gap-1 justify-center items-center my-2 text-[#282828CC]'><CiClock2 /> {preparing_time} minutes</p>
                <p className='flex gap-1 justify-center items-center my-2 text-[#282828CC]'><AiOutlineFire /> {calories} calories</p>
            </div>
            <button className='btn-exploreNow' onClick={()=> handleWantsToCook(recipe)}>Want to Cook</button>
        </div>
    );
};

Recipes.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleWantsToCook: PropTypes.func.isRequired
}

export default Recipes;