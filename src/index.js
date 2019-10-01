import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App appTitle = "ReactJS TutoReal App"/>, document.getElementById('root'));
registerServiceWorker();
