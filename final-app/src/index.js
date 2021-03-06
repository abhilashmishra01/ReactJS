import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Master from "./Master";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Master>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </Master>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
