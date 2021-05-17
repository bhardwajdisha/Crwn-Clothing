import memoize from 'lodash.memoize';

import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)
export const selectCategory =memoize((collectionUrlParams)=>
 createSelector(
    [selectCollections],
    collections => collections[collectionUrlParams]
    )
)

