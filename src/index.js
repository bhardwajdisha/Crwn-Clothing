import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react'

import { Provider} from 'react-redux'
import {store , persist} from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persist}>
        <App />
      </PersistGate>
    </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);


// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import reportWebVitals from './reportWebVitals';