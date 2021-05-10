import React from 'react'

import './sign-up.scss'

import FormInput from '../Form-Input/Form-input'
import CustomButton from '../buttons/button'
import {auth ,createUserProfileDocument} from '../../firebase/firebase.utlils';

class SignUp extends React.Component {
    constructor(){
        super();

        this.state={
            email:"",
            password:"",
            displayName:"",
            confirmPassword:""
        }
    }

    handleSubmit=async(e)=>{
        e.preventDefault();

        const {email ,password ,displayName,confirmPassword}=this.state;
        if(password !== confirmPassword)
        {
            alert("Password don't match")
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password)
            await createUserProfileDocument(user,{displayName});

            this.setState={
                email:"",
                password:"",
                displayName:"",
                confirmPassword:""
            }

        }catch(e){
            console.log("Error creating user", e.message);
        }
    }
    handleChange=(e)=>{
        const { value , name } = e.target;
        this.setState({[name]:value}) 
    }

    render(){

        return (
            <div className='sign-up' onSubmit={this.handleSubmit}>
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form>
                    <FormInput 
                           type="text"
                           name="displayName"
                           label="Display Name"
                           value={this.state.displayName}
                           handlechange={this.handleChange}
                           required 
                    />
                    <FormInput 
                           type="email"
                           name="email"
                           label="Email"
                           value={this.state.email}
                           handlechange={this.handleChange}
                           required 
                    />
                    <FormInput 
                           type="password"
                           name="password"
                           label="Password"
                           value={this.state.password}
                           handlechange={this.handleChange}
                           required 
                    />
                    <FormInput 
                           type="password"
                           name="confirmPassword"
                           label="Confirm Password"
                           value={this.state.confirmPassword}
                           handlechange={this.handleChange}
                           required 
                    />
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        )
    }
    
}

export default SignUp
