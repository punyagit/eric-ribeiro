import React from 'react';
import ReactDOM from 'react-dom';
import NavComponent from './NavComponent';

it('renders without crashing'), () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
};