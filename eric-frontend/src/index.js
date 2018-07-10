import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import NavComponent from './components/NavComponent';
import FooterComponent from './components/FooterComponent';

ReactDOM.render(<NavComponent />, document.getElementById('nav-component'));
ReactDOM.render(<FooterComponent />, document.getElementById('footer-component'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
