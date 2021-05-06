import React from 'react';
import './App.css';
import {Homepage} from './pages/homepage'
import {Route } from 'react-router-dom'
import PreviewShop from './pages/previewShop/PreviewShop'

function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shops" component={PreviewShop} />
    </div>
  );
}

export default App;
