import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock';
import Weather from './frontend/weather';

const Root = () => (
  <div>
    <h1>Test</h1>
    <Clock />
    <Weather />
  </div>
)

document.addEventListener('DOMContentLoaded',() => {
  ReactDOM.render(<Root/>, document.getElementById('root'));
})