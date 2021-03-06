import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './header.scss'

import {ReactComponent as Logo} from '../../asset/crown.svg'
import {auth} from '../../firebase/firebase.utlils'
import CartIcon from '../cart-icon/cart-icon'
import CartDropdown from '../cart-dropdown/cart-dropdown'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selector' 

const Header = ({currentUser ,hidden}) => {
    return (
        <div className="header">
            <div className="logo-container">
                <Link className="logo" to="/">
                    <Logo />
                </Link>
            </div>
            <div className="opitons-container">
                 <Link className="option" to="/shops">SHOP</Link>
                 <Link className="option" to='/contacts'>CONTACT</Link> 
                 {
                     currentUser ?
                    <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
                     :
                     <Link className="option" to='/signIn'>SIGN IN</Link>  
                 } 
                <CartIcon className="option icon"/>  
            </div>
            {hidden?null:<CartDropdown />}  
        </div>        
    )
}

const mapStateToProps=createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
});
export default connect(mapStateToProps)(Header)
