import SHOP_DATA from "./ShopData";

const INIITIAL_STATE = {
    collections : SHOP_DATA
}

const shopReducer = (state=INIITIAL_STATE , action)=>{
    switch(action.type){
        default: return state ;
    }
}

export default shopReducer