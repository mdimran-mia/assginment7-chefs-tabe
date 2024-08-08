import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Recipes from '../Recipes/Recipes';
import './OurRecipes.css'
import {
    addCartToLS,
    getStoredCart,
    removeCartFromLS,
    getStoredCurrentlyCooking,
    addCurrentlyCookingToLS,
    removeCurrentlyCookingFromLS
} from '../Utility/localStorage';
const OurRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [wantsToCook, setWantsToCook] = useState([]);
    const [currentlyCookingItem, setCurrentlyCookingItem] = useState([]);
    const [delivered, setDelivered] = useState([]);

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))

        const storedCart = getStoredCart();
        const storedCurrentlyCooking = getStoredCurrentlyCooking();

        setWantsToCook(storedCart.map(id => recipes.find(recipe => recipe.recipe_id === id)).filter(Boolean));
        setCurrentlyCookingItem(storedCurrentlyCooking.map(id => recipes.find(recipe => recipe.recipe_id === id)).filter(Boolean));

    }, [recipes]);

    const handleWantsToCook = recipe => {
        setWantsToCook([...wantsToCook, recipe])
        addCartToLS(recipe.recipe_id)
    }


    const handlePreparingButton = recipe => {
        setWantsToCook(wantsToCook.filter(item => item.recipe_id !== recipe.recipe_id));
        setCurrentlyCookingItem([...currentlyCookingItem, recipe]);
        removeCartFromLS(recipe.recipe_id);
        addCurrentlyCookingToLS(recipe.recipe_id);
    }

    const handleToDelivered = (recipe) => {
        setCurrentlyCookingItem(currentlyCookingItem.filter(item => item.recipe_id !== recipe.recipe_id));
        setDelivered([...delivered, recipe]);
        removeCurrentlyCookingFromLS(recipe.recipe_id);
    }


    return (
        <div className="container">
            <div className='headline'>
                <h2>Our Recipes</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>

            <div className='component-container'>

                <div className='recipes-section'>
                    {
                        recipes.map((recipe, idx) => <Recipes
                            key={idx}
                            recipe={recipe}
                            currentlyCookingItem={currentlyCookingItem}
                            handleWantsToCook={handleWantsToCook}
                        ></Recipes>)
                    }
                </div>
                <div className='cart-section'>
                    <Cart
                        wantsToCook={wantsToCook}
                        currentlyCookingItem={currentlyCookingItem}
                        handlePreparingButton={handlePreparingButton}
                        delivered={delivered}
                        handleToDelivered={handleToDelivered}
                    ></Cart>
                </div>

            </div>
        </div>
    );
};

export default OurRecipes;