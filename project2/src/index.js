import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Product from './Products';
import reportWebVitals from './reportWebVitals';
import products from './data';
import Lesproduits from './Lesproduits';
//import Listetable from './Listetable';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Lesproduits liste={products}/>
  </React.StrictMode>
);
//<Product products[0]/>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
