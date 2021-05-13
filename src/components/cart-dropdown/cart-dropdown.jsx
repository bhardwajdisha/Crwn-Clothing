import React from 'react'

import CustomButton from '../buttons/button'

import './cart-dropdown.scss'

const CartDropdown = () => {
    return (
        <div className="cart-dropdown" >
            <div className="cart-items" />
            <CustomButton >Go TO CHECKOUT</CustomButton>
        </div>
    )
}


export default CartDropdown;
