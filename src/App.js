import React from 'react';
import {Route ,Switch, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import './App.css';

import {Homepage} from './pages/homepage'
import PreviewShop from './pages/previewShop/PreviewShop'
import SignInUp from './pages/signIn-signUp/signIn-signUp'
import Checkout from './pages/checkout/checkout'

import Header from './components/header/header'
import {auth, createUserProfileDocument} from './firebase/firebase.utlils'
import {setCurrentUser} from './redux/user/user.action'
import { selectCurrentUser } from './redux/user/user.selector' 

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
            <Route path="/shops" component={PreviewShop} />
            <Route 
              exact 
              path="/signIn" 
              render={()=>
                this.props.currentUser?
                (<Redirect to='/' />):
                (< SignInUp />)}
            />
            <Route exact path='/checkout' component={Checkout}/>
        </Switch>
      </div>
    );
  } 
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
});
const mapDispatchToProps = dispatch=>({
  setCurrentUser : user=>dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
