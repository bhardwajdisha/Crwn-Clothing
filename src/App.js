import React from 'react';
import {Route ,Switch, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'

import './App.css';

import {Homepage} from './pages/homepage'
import PreviewShop from './pages/previewShop/PreviewShop'
import Header from './components/header/header'
import SignInUp from './pages/signIn-signUp/signIn-signUp'
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
            <Route 
              exact 
              path="/signIn" 
              render={()=>
                this.props.currentUser?
                (<Redirect to='/' />):
                (< SignInUp />)}
            />
        </Switch>
      </div>
    );
  } 
}

const mapStateToProps = ({user})=>({
  currentUser : user.currentUser
});
const mapDispatchToProps = dispatch=>({
  setCurrentUser : user=>dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
