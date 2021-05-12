import React from 'react'

import './signIn-signUp.scss'
import SignIn from '../../components/sign-in/SignIn'
import SignUp from '../../components/sign-up/sign-up'
const SignInUp = () => {
    return (
        <div className="signIn-and-signUp">
            <div>
                <SignIn />
            </div>
            <div>
                <SignUp />
            </div>     
        </div>
    )
}

export default SignInUp
