import React from 'react'
import {connect} from 'react-redux'
import {ReactComponent as ShoppingIcon} from '../../asset/shopping-bag.svg'

import './cart-icon.scss'

import {toggleCartHidden} from '../../redux/cart/cart.action'


const CartIcon = ({toggleCartHidden}) => {
    return (
        <div className="cart-icon" onClick= {toggleCartHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}

const mapDispatchToProps = dispatch=>({
    toggleCartHidden: ()=>dispatch(toggleCartHidden())
});
export default  connect(null,mapDispatchToProps)(CartIcon);