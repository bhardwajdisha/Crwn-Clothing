import React from 'react'
import { createStructuredSelector } from 'reselect'
import {connect} from 'react-redux'
import {selectCollections}  from '../../redux/shop/shop.selector'

import Collection from '../../components/preview-collection/preview-collection'


const PreviewShop =({collections})=>(
        <div className='shop-page'>
            {
                collections.map(category =>{
                    return <Collection key={category.id} category={category} /> 
                })
            }
        </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})
export default connect(mapStateToProps)(PreviewShop);
