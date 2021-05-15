import React from 'react'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {withRouter} from 'react-router-dom'

import CustomButton from '../buttons/button'
import CartItem from '../cart-item/cart-item' 
import {selectCartitems} from '../../redux/cart/cart.selectors'
import {toggleCartHidden} from '../../redux/cart/cart.action'

import './cart-dropdown.scss'

const CartDropdown = ({cartItems, history,dispatch}) => {
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
            <CustomButton onClick={()=>{ history.push('/checkout'); dispatch(toggleCartHidden()) } } >Go TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps =createStructuredSelector({
    cartItems: selectCartitems
})
export default withRouter(connect(mapStateToProps)(CartDropdown));
