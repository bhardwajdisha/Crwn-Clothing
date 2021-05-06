import React from 'react';
import './App.css';
import {Homepage} from './pages/homepage'
import {Route } from 'react-router-dom'

const Hats= ()=>{
  return(
    <div>
      <h1 style={{textAlign: 'center'}}>Hats page</h1>
      
    </div>
  )
}
function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/hats" component={Hats} />
    </div>
  );
}

export default App;
