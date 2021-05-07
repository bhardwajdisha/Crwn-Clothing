import React from 'react';
import {Route ,Switch } from 'react-router-dom'

import './App.css';

import {Homepage} from './pages/homepage'
import PreviewShop from './pages/previewShop/PreviewShop'
import Header from './components/header/header'

function App() {
  return (
    <div>
      <Header />
      <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shops" component={PreviewShop} />
      </Switch>
    </div>
  );
}

export default App;
