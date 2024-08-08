const getStoredCart = () => {
    const setStoredCart = localStorage.getItem('cart');
    return setStoredCart? JSON.parse(setStoredCart):[];
}


const savaCartToLS = cart => {
    const saveCartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', saveCartStringified);
}

const addCartToLS = id => {
    const cart = getStoredCart();
    if (!cart.includes(id)) {
        cart.push(id);
        savaCartToLS(cart)
    }
}

const removeCartFromLS = id => {
    const cart = getStoredCart();
    const remaining = cart.filter(idx => idx !== id);
    savaCartToLS(remaining);

    addCurrentlyCookingToLS(id);
}

// ----------------------------------

const getStoredCurrentlyCooking = () => {
    const setStoredCooking = localStorage.getItem('currentlyCooking');
    return setStoredCooking? JSON.parse(setStoredCooking): [];
}


const savaCurrentlyCookingToLS = (currentlyCooking) => {
    const saveCookingStringified = JSON.stringify(currentlyCooking);
    localStorage.setItem('currentlyCooking', saveCookingStringified);
}

const addCurrentlyCookingToLS = id => {
    const currentlyCooking = getStoredCurrentlyCooking();
    if (!currentlyCooking.includes(id)) {
        currentlyCooking.push(id);
        savaCurrentlyCookingToLS(currentlyCooking)
    }
}

const removeCurrentlyCookingFromLS = id => {
    const currentlyCooking = getStoredCurrentlyCooking();
    const remaining = currentlyCooking.filter(idx => idx !== id);
    savaCurrentlyCookingToLS(remaining);
}

export { addCartToLS, getStoredCart, removeCartFromLS, getStoredCurrentlyCooking, addCurrentlyCookingToLS, removeCurrentlyCookingFromLS }