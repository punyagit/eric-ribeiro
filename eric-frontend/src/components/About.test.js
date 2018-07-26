import React from 'react';
import ReactDOM from 'react-dom';
import About from './About';

it('renders a div', () => {
  const div = document.createElement('div');
  ReactDOM.render(<About />, div);
  ReactDOM.unmountComponentAtNode(div);
});