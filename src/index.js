import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// react-router-dom
import { BrowserRouter } from "react-router-dom";
//redux toolkit 
import { Provider } from 'react-redux';
import { store } from './features/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

