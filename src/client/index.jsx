import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from '../App';

window.addEventListener('load', () => {
  ReactDOM.hydrate(<App />, document.getElementById('react_root'));
  console.log(document.getElementById('react_root'));
});
