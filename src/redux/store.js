import {createStore , applyMiddleware} from 'redux'
import logger from 'react-logger'

import rootReducer from './root-reducer'

const middleware = [logger]

const store = createStore(rootReducer, applyMiddleware(...middleware))

export default store;