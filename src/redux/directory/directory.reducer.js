const INITIAL_STATE = {
    sections :[
        {
            title: 'Hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1,
            linkUrl: 'shops/hats'
          },
          {
            title: 'Jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            linkUrl: 'shops/jackets'
          },
          {
            title: 'Sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
            linkUrl: 'shops/sneakers'
          },
          {
            title: 'Womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            id: 4,
            linkUrl: 'shops/womens'
          },
          {
            title: 'Mens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            id: 5,
            linkUrl: 'shops/mens'
          }
    ]
}

const directoryReducer = (state=INITIAL_STATE ,action) =>{
        switch(action.type){
            default:
                return state;
        }
}

export default directoryReducer