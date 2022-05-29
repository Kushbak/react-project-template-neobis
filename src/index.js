import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import rootStore from './redux/reducers'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const store = createStore(rootStore, applyMiddleware(thunk))
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
