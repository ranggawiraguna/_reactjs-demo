import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './__initial/Dashboard';
import Intro from './Materi/00 - Intro/Intro';
import Component from './Materi/01 - Component/Component';
import State from './Materi/02 - State/State';
import Props from './Materi/03 - Props/Props';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/Intro" exact component={Intro}/>
        <Route path="/Component" exact component={Component}/>
        <Route path="/State" exact component={State}/>
        <Route path="/Props" exact component={Props}/> 
      </Switch>
    </BrowserRouter>
  )
}
  
export default App;
