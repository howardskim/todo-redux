import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import List from './list';
import {Route} from 'react-router-dom';

const App = () => (
    <div className="container">
        <h1 className="center">Redux To Do</h1>
        <Route exact path = "/" component={List}></Route>
    </div>
);

export default App;
