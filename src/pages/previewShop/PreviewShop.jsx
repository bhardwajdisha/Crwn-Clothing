import React from 'react'
import ShopData from './ShopData'
import Collection from '../../components/preview-collection/preview-collection'

class PreviewShop extends React.Component{
    constructor(props){
        super(props);

        this.state=ShopData;
    }
    render(){
        const collection=this.state;
        return (
            <div className='shop-page'>
                {
                    collection.map(category =>{
                        return <Collection key={category.id} category={category} /> 
                    })
                }
            </div>
        )
    }
}

export default PreviewShop;
