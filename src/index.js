import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {reducer as formReducer} from 'redux-form';
import reduxPromise from './middleware/redux_promise';
import rootReducer from './reducers';
import think from './middleware/think';
import App from './components/app';

const store = createStore(rootReducer, {}, applyMiddleware(think, reduxPromise));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
