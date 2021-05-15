import React from 'react'
import {connect} from 'react-redux'

import './checkout-item.scss'
import { clearItemFromCart } from '../../redux/cart/cart.action'

const CheckoutItem = ({item, clearitem}) => {
    const {name,imageUrl,price,quantity} =item;
    return (
        <div className="checkout-item">  
             <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
                <span className='name'>{name}</span>
                <span className='quantity'>{quantity}</span>
                <span className='price'>{price}</span>
                <div className='remove-button' onClick={()=>clearitem(item)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch=>({
    clearitem : item =>dispatch(clearItemFromCart(item))
}) 

export default connect(null,mapDispatchToProps)(CheckoutItem);
