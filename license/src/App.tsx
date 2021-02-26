import React from 'react';

import { Switch, Route } from 'react-router'
import Home from './views/Home'
import Test from './views/Test'
import Result from './views/Result'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/test" component= { Test }/>
        <Route path="/result" component={ Result } />
      </Switch>
    </div>
  );
}

export default App;
