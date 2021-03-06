import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './stores/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  ReactDOM.render(< Root store={store} />, rootEl);

  window.store = store;
});
