import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RequestProvider } from 'react-request-hook'
import axios from 'axios'
import registerServiceWorker from "./registerServiceWorker"

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api'
})

ReactDOM.render(
  <React.StrictMode>
    <RequestProvider value={axiosInstance}>
    <App />
    </RequestProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
registerServiceWorker();
