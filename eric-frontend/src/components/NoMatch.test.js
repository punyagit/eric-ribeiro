import React from 'react';
import ReactDOM from 'react-dom';
import NoMatch from './NoMatch';

it('renders an h1 heading', () => {
  const h1 = document.createElement('h1');
  ReactDOM.render(<NoMatch />, h1);
  ReactDOM.unmountComponentAtNode(h1);
});