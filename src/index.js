import React from 'react';
import ReactDOM from 'react-dom';
import Portfolio from './Portfolio';
import './styles/base.scss';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Portfolio />, document.querySelector('#root'));

serviceWorker.unregister();
