const getCartFromLS = ()=>{
    const jsonCart = localStorage.getItem('cart');
    if(jsonCart){
        const storedCart =JSON.parse(jsonCart);
        return storedCart;
    }
    return []
}
const saveCartToLocalStorage = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}
const addCartLS=(id)=>{
    const cart = getCartFromLS();
    const newCart = [...cart,id]
    saveCartToLocalStorage(newCart)
}
const removeFromCartLs =id=>{
    const storedCart=getCartFromLS();
    const remainingCart = storedCart.filter(storedId=>storedId !==id)
    saveCartToLocalStorage(remainingCart)
}
export {getCartFromLS,addCartLS,removeFromCartLs}



