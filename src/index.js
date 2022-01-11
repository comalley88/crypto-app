import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'

//import logic to run the store
import store from './app/store'
import { Provider } from 'react-redux';
//import from antdesign to import all styling
import "antd/dist/antd.css";



ReactDOM.render(
// wrap application in browserRouter so that it can be displayed
  <BrowserRouter>
{/*** everything inside the app variable will have access to the store*/}
  <Provider store={store}>
  <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
