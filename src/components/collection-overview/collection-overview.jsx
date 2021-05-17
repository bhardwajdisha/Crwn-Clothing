import React from 'react'
import { createStructuredSelector } from 'reselect'
import {connect} from 'react-redux'
import {selectCollectionsForPreview }  from '../../redux/shop/shop.selector'

import Collection from '../../components/preview-collection/preview-collection'

import './collection-overview.scss'

const CollectionOverview = ({collections}) => {
    return (
        <div className="collection-overview">
            {
                collections.map(category =>{
                    return <Collection key={category.id} category={category} /> 
                })
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})
export default connect(mapStateToProps)(CollectionOverview)
