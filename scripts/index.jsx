import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';

import ToDo from './app/ToDo/index';
import '../styles/app.css'

ReactDOM.render(<ToDo/>, document.getElementById('app'));
