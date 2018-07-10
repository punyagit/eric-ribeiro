import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import NavComponent from './NavComponent';
import FooterComponent from './FooterComponent';

ReactDOM.render(<NavComponent />, document.getElementById('navbar'));
ReactDOM.render(<FooterComponent />, document.getElementById('footer'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
