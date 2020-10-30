import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from './Dashboard'
import Intro from './Materi/00 - Intro/Intro'
import Component from './Materi/01 - Component/Component'
import State from './Materi/02 - State/State'
import Props from './Materi/03 - Props/Props'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Dashboard/" exact component={Dashboard} />
        <Route path="/Dashboard/Intro" exact component={Intro} />
        <Route path="/Dashboard/Component" exact component={Component} />
        <Route path="/Dashboard/State" exact component={State} />
        <Route path="/Dashboard/Props" exact component={Props} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
