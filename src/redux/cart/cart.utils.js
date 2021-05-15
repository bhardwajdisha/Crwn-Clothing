export const addItemToCart =(cartItems, cartItemsToAdd)=>{
    const existingCartItem= cartItems.find(
        cartItem=> cartItem.id === cartItemsToAdd.id
    );

    if(existingCartItem){
        return cartItems.map((cartItem)=>
            cartItem.id === cartItemsToAdd.id ?
            {...cartItem, quantity: cartItem.quantity + 1}: cartItem
        )
    }

    return [...cartItems , { ...cartItemsToAdd, quantity:1 }];
}

export const removeItemFromCart = (cartItems, removeItem)=>{
    const existingCartItem= cartItems.find(
        cartItem=> cartItem.id === removeItem.id
    );

    if(existingCartItem.quantity === 1)
    {
        return cartItems.filter(item=> item.id !==removeItem.id )
    }
    else{
        return cartItems.map((cartItem)=> (
            cartItem.id === removeItem.id ?
            {...cartItem , quantity:cartItem.quantity -1}:cartItem
        ))
    }

    
}