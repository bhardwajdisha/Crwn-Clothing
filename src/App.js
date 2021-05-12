import React from 'react';
import {Route ,Switch } from 'react-router-dom'
import {connect} from 'react-redux'

import './App.css';

import {Homepage} from './pages/homepage'
import PreviewShop from './pages/previewShop/PreviewShop'
import Header from './components/header/header'
import SignIn_Up from './pages/signIn-signUp/signIn-signUp'
import {auth, createUserProfileDocument} from './firebase/firebase.utlils'
import {setCurrentUser} from './redux/user/user.action'

class App extends React.Component {
  unsubscribeFromAuth=null;
  unsubscribeFromSnapshot = null;

  componentDidMount(){
    const {setCurrentUser}=this.props;
    this.unsubscribeFromAuth=auth.onAuthStateChanged( async user=>{
      if(user){
        const userRef=await createUserProfileDocument(user);

        this.unsubscribeFromSnapshot = userRef.onSnapshot(snapshot => {
            setCurrentUser(
              {
                id: snapshot.id,
                ...snapshot.data()
              })
        })
      }
      setCurrentUser( user );
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
        <Header />
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/shops" component={PreviewShop} />
            <Route exact path="/signIn" component={SignIn_Up}/>
        </Switch>
      </div>
    );
  } 
}

const mapDispatchToProps = dispatch=>({
  setCurrentUser : user=>dispatch(setCurrentUser(user))
});

export default connect(null,mapDispatchToProps)(App);
