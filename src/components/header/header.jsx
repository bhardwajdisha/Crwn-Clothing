import React from 'react'
import {Link } from 'react-router-dom'
import './header.scss'
import {ReactComponent as Logo} from '../../asset/crown.svg'
const Header = () => {
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
                 <Link className="option" to='/signIn'>SIGN IN</Link>           
            </div>
            
        </div>
    )
}

export default Header
