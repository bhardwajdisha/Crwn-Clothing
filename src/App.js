import React from 'react';
import {Route ,Switch } from 'react-router-dom'

import './App.css';

import {Homepage} from './pages/homepage'
import PreviewShop from './pages/previewShop/PreviewShop'
import Header from './components/header/header'
import SignIn_Up from './pages/signIn-signUp/signIn-signUp'
import {auth} from './firebase/firebase.utlils'

class App extends React.Component {
  constructor(){
    super();

    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth=null;

  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged( user=>{
      this.setState({currentUser:user})
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render()
  {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/shops" component={PreviewShop} />
            <Route exact path="/signIn" component={SignIn_Up}/>
        </Switch>
      </div>
    );
  } 
}

export default App;
