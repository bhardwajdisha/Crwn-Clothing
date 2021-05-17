import React from 'react'
import {Route } from 'react-router-dom'

import CollectionOverview from '../../components/collection-overview/collection-overview'
import Category from '../category/category'

const PreviewShop =({match})=>{
    return (
        <div className='shop-page'>
            <Route exact path ={match.path} component={CollectionOverview} />
            <Route path={`${match.path}/:categoryId`} component={Category}/>
        </div>
    )
}


export default PreviewShop;
