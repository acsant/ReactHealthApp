import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import HealthApp from './src/reducers/index';
import App from './src/components/App';

let store = createStore(HealthApp)

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)