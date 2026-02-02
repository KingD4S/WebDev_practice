import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import myFirstReducer from './redux/reducer.js'
import mySaga from './redux/saga.js'

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ myFirstReducer});
// const store = (rootReducer, applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
