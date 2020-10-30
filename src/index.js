import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const token = '<TOKEN>';
const ws = new WebSocket('<ENDPOINT>?token=' + token);

ReactDOM.render(
  <React.StrictMode>
    <App ws={ws} />
  </React.StrictMode>,
  document.getElementById('root')
);
