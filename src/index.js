import * as serviceWorker from './serviceWorker'
import store from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {

  root.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>
  );
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)

serviceWorker.unregister();
