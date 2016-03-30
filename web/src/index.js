import React from 'react';
import ReactDOM from 'react-dom';
import App from './javascript/components/App';
import 'normalize.css/normalize.css'
import './styles.scss'
import Common from './javascript/modules/common/index.js'

Common.actions.dispatchFetchCards()
// set currentCardId to one of these at random

// Router and its parent component????
// Puts whatever component was matched by the router inside that parent.
ReactDOM.render(<App />, document.getElementById('main'));
