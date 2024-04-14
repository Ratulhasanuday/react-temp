const getStorageCart=()=>{
    const storedCartString=localStorage.getItem('cart')
    if (storedCartString) {
        return JSON.parse(storedCartString)
    }
    return [];
}


const saveCartToLS=cart=>{
    const cartStringified =JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified)
}
const addToLS=id=>{
    const cart=getStorageCart();
    cart.push(id);
    //save to localStorage 
    saveCartToLS(cart)
}
const removeFromeLS=id=>{
    const cart=getStorageCart();
    //removing every id
    const remaining=cart.filter(idx=> idx !==id)
    saveCartToLS(remaining)
}
export {addToLS,getStorageCart,removeFromeLS}
