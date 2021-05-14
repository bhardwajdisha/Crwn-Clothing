import {createSelector } from 'reselect'

const selectCart = state=> state.cart;

export const selectCartitems = createSelector(
    [selectCart],
    (cart)=>cart.cartItems
)

export const selectCartItemCount = createSelector(
    [selectCartitems],
    cartItems => cartItems.reduce((acc,cartItem)=> acc+ cartItem.quantity ,0)
) 