import React from 'react'

import FormInput from '../Form-Input/Form-input'
import CustomButton from '../buttons/button'
import {auth, signInWithGoogle} from '../../firebase/firebase.utlils'

import './SignIn.scss'

class SignIn extends React.Component{
    constructor(){
        super();

        this.state={
            email:"",
            password:""
        }
    }

    handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const {email,password}=this.state;
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:"" ,password:""})
        }catch(e){
            console.log(e.message);
        }
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
                        label="Email" 
                        handlechange={this.handleChange}
                        required />

                    <FormInput 
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        label="Password" 
                        handlechange={this.handleChange} 
                        required />

                    <div className="buttons">
                        <CustomButton type="submit" >SIGN IN</CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogle >SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form> 

            </div>
        )
    }
} 

export default SignIn
