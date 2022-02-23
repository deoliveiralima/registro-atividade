import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import appReducer from './reducers/reducers';

import axios from 'axios';
let token ='token'
  sessionStorage.getItem('token') ? token = sessionStorage.getItem('token') : 
  

axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-type": "application/json",
    "Authorization" : `Bearer ${token}`
  }
});
console.log(token)

const store = createStore(appReducer)


ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}> 
      <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
