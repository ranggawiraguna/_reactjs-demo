import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './__initial/GlobalStyle.css';
import Dashboard from './__initial/Dashboard';
import Intro from './Materi/00 - Intro/Intro';
import Component from './Materi/01 - Component/Component';
import State from './Materi/02 - State/State';
import Props from './Materi/03 - Props/Props';
import Manipulation_Component from './Materi/04 - Manipulation_Component/Manipulation_Component'
import LifeCycle_Component from './Materi/04 - Manipulation_Component/Manipulation_Component'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/Intro" exact component={Intro}/>
        <Route path="/Component" exact component={Component}/>
        <Route path="/State" exact component={State}/>
        <Route path="/Props" exact component={Props}/> 
        <Route path="/Manipulation-Component" exact component={Manipulation_Component}/> 
        <Route path="/LifeCycle-Component" exact component={LifeCycle_Component}/> 
      </Switch>
    </BrowserRouter>
  )
}
  
export default App;
