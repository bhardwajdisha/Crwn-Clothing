import React from 'react'
import {connect} from 'react-redux'

import CustomButton from '../buttons/button'
import CartItem from '../cart-item/cart-item' 
import {selectCartitems} from '../../redux/cart/cart.selectors'

import './cart-dropdown.scss'

const CartDropdown = ({cartItems}) => {
    return (
        <div className="cart-dropdown" >
            <div className="cart-items">
                {
                    cartItems.map( item=>(
                        <CartItem key={item.id} item={item}/>
                    ))
                }
            </div>
            <CustomButton >Go TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps =state=>({
    cartItems: selectCartitems(state)
})
export default connect(mapStateToProps)(CartDropdown);
