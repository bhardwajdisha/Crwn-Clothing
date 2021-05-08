import React from 'react';
import {Route ,Switch } from 'react-router-dom'

import './App.css';

import {Homepage} from './pages/homepage'
import PreviewShop from './pages/previewShop/PreviewShop'
import Header from './components/header/header'
import SignIn_Up from './pages/signIn-signUp/signIn-signUp'

function App() {
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

export default App;
