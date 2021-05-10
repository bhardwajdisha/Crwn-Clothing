import React from 'react';
import {Route ,Switch } from 'react-router-dom'

import './App.css';

import {Homepage} from './pages/homepage'
import PreviewShop from './pages/previewShop/PreviewShop'
import Header from './components/header/header'
import SignIn_Up from './pages/signIn-signUp/signIn-signUp'
import {auth, createUserProfileDocument} from './firebase/firebase.utlils'

class App extends React.Component {
  constructor(){
    super();

    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth=null;
  unsubscribeFromSnapshot = null;

  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged( async user=>{
      if(user){
        const userRef=await createUserProfileDocument(user);

        this.unsubscribeFromSnapshot = userRef.onSnapshot(snapshot => {
            this.setState({
              currentUser:{
                id: snapshot.id,
                ...snapshot.data()
              }
            })
        })
      }
      this.setState({ currentUser: user });
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
    this.unsubscribeFromSnapshot();
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
