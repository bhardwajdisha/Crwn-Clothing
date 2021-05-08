import React from 'react'

import FormInput from '../Form-Input/Form-input'
import CustomButton from '../buttons/button'

import './SignIn.scss'

class SignIn extends React.Component{
    constructor(){
        super();

        this.state={
            email:"",
            password:""
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault();

        this.setState({email:"" ,password:""})
    }

    handleChange=(e)=>{
        const { value , name } = e.target;
        this.setState({[name]:value}) 
    }

    render(){
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign In with your email and password</span>

                <form onSubmit={this.handleSubmit} >
                    <FormInput 
                        type="email" 
                        name="email" 
                        value={this.state.email} 
                        label="email" 
                        handlechange={this.handleChange}
                        required />

                    <FormInput 
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        label="password" 
                        handlechange={this.handleChange} 
                        required />

                    <CustomButton type="submit" >SIGN IN</CustomButton>
                </form> 

            </div>
        )
    }
} 

export default SignIn
