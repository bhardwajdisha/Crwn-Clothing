import {createSelector } from 'reselect'

const selectCart = state=> state.cart;

export const selectCartitems = createSelector(
    [selectCart],
    (cart)=>cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    (cart)=>cart.hidden
)

export const selectCartItemCount = createSelector(
    [selectCartitems],
    cartItems => cartItems.reduce((acc,cartItem)=> acc+ cartItem.quantity ,0)
) 

export const selectCartTotal =createSelector(
    selectCartitems,
    (cartItems) => cartItems.reduce((acc,cartItem)=> acc+(cartItem.quantity * cartItem.price),0) 
)