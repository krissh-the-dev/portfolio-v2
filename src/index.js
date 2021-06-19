import React from 'react';
import ReactDOM from 'react-dom';
import Portfolio from './Portfolio';
import SWManager from './SWManager';
import './styles/base.scss';

ReactDOM.render(
  <>
    <Portfolio />
    <SWManager />
  </>,
  document.querySelector('#root')
);
