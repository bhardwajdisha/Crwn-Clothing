import React from 'react'
import {connect} from 'react-redux'

import './category.scss'

import {selectCategory } from './../../redux/shop/shop.selector'
import CollectionItem from '../../components/collection-item/collection-item'

const Category = ({collection}) => {
    const {title,items }=collection
    return (
        <div className="category-page">
            <h2 className="title"> {title} </h2>
            <div className="item">
                {
                    items.map((item)=>(
                        <CollectionItem key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToPorps = (state,ownProps)=>({
    collection: selectCategory(ownProps.match.params.categoryId)(state)
})
export default connect(mapStateToPorps)(Category);
