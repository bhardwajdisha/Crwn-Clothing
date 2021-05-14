import React from 'react'

import './cart-item.scss'
const CartItem = ({item:{imageUrl,price,name,quantity}}) => {
    return (
        <div className="card-item">
            <img className="image" src={imageUrl} alt="item" />
            <div className="item-detail">
                <span className='name'>{name}</span>
                <span className="price">{quantity} x ${price}</span>
            </div>
        </div>
    )
}

export default CartItem;
