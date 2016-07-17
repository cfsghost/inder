import React from 'react';
import ReactDOM from 'react-dom';
import Inder from '../../';
import middlewares from './middlewares';
import Counter from './components/Counter'

var inder = new Inder();

inder.inject(middlewares);

function render() {
	ReactDOM.render(
		<Counter
			value={inder.getState()}
			onIncrement={() => inder.dispatch({ type: 'action.INCREMENT' })}
			onDecrement={() => inder.dispatch({ type: 'action.DECREMENT' })}
		/>,
		document.getElementById('root')
	);
}

inder.on('stateChanged', render);
render();
