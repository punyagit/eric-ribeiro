import React from 'react';
import ReactDOM from 'react-dom';
import NavComponent from './NavComponent';

it('renders header', () => {
  const span = document.createElement('span');
  ReactDOM.render(<NavComponent />, span);
  ReactDOM.unmountComponentAtNode(span);
});