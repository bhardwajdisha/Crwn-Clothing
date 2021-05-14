import React from 'react'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CustomButton from '../buttons/button'
import CartItem from '../cart-item/cart-item' 
import {selectCartitems} from '../../redux/cart/cart.selectors'

import './cart-dropdown.scss'

const CartDropdown = ({cartItems}) => {
    return (
        <div className="cart-dropdown" >
            <div className="cart-items">
                {
                    cartItems.length ? (
                        cartItems.map( item=>(
                            <CartItem key={item.id} item={item}/>
                        ))
                    ):(
                        <span className="empty-message"> Your cart is empty!</span>
                    )            
                }
            </div>
            <CustomButton >Go TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps =createStructuredSelector({
    cartItems: selectCartitems
})
export default connect(mapStateToProps)(CartDropdown);
