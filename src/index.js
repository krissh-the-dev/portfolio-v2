import React from 'react';
import ReactDOM from 'react-dom';
import Portfolio from './Portfolio';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Portfolio />, document.querySelector('#root'));

serviceWorker.unregister();
