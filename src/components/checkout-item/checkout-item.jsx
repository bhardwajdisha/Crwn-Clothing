import React from 'react'
import {connect} from 'react-redux'

import './checkout-item.scss'
import { addItem ,clearItemFromCart ,removeItem } from '../../redux/cart/cart.action'

const CheckoutItem = ({item, clearitem, addItem, removeItem}) => {
    const {name,imageUrl,price,quantity} =item;
    return (
        <div className="checkout-item">  
             <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
                <span className='name'>{name}</span>

                <span className='quantity'>
                    <div className="arrow" onClick={()=>removeItem(item)}> &#10094; </div>
                    <span className="value"> {quantity} </span>
                    <div className="arrow" onClick={()=>addItem(item)}> &#10095; </div>
                </span>

                <span className='price'>{price}</span>
                <div className='remove-button' onClick={()=>clearitem(item)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch=>({
    clearitem : item=>dispatch(clearItemFromCart(item)),
    addItem : item =>dispatch(addItem(item)),
    removeItem : item =>dispatch(removeItem(item))
}) 

export default connect(null,mapDispatchToProps)(CheckoutItem);
