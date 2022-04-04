import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './modules/app/routes'
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import { Provider } from "react-redux";
import store from "./config/store";

const container = document.getElementById('root');

// Create a root.
const root = ReactDOM.createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
