import React from 'react'
import './checkout.scss'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {selectCartitems ,selectCartTotal} from '../../redux/cart/cart.selectors'

import CheckoutItem from '../../components/checkout-item/checkout-item'

const Checkout = ({cartItems,total}) => {
    return (
        <div className="checkout-page">
            <div className="header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            <div>
                {
                    cartItems.map(cartItem => (
                        <CheckoutItem key={cartItem.id} item={cartItem} />
                    ))
                }
            </div>
            <div className="total">
                TOTAL: ${total}
            </div>
           
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartitems,
    total : selectCartTotal
})
export default connect(mapStateToProps)(Checkout);
