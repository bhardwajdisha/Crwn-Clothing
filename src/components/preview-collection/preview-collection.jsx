import React from 'react'
import './preview-collection.scss'
import CollectionItem from '../collection-item/collection-item'

const Collection = ({category}) => {
    return (
        <div className="collection-preview">
            <h1 className="title"> {category.title.toUpperCase()} </h1>
            <div className="preview">
                {
                    category.items
                        .filter((item,index)=> index<4 )
                        .map(({id,...otherItemsProps})=>{
                            return <CollectionItem key={id} {...otherItemsProps}/>
                        })
                }
            </div>
            
        </div>
    )
}

export default Collection;
