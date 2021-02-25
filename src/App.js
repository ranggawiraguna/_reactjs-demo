import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App/GlobalStyle.css';
import Dashboard from './App/Dashboard';
import Intro from './Pages/00 - Intro/Intro';
import Component from './Pages/01 - Component/Component';
import State from './Pages/02 - State/State';
import Props from './Pages/03 - Props/Props';
import Manipulation_Component from './Pages/04 - Manipulation_Component/Manipulation_Component';
import LifeCycle_Component from './Pages/05 - LifeCycle_Component/LifeCycle_Component';
import Backend_Interaction from './Pages/06 - Backend_Interaction/Backend_Interaction';
import Backend_LocalApi from './Pages/06 - Backend_Interaction/SubContext/pages/060 - LocalApi';
import Backend_FakeApi from './Pages/06 - Backend_Interaction/SubContext/pages/061 - FakeApi';
import Backend_Post from './Pages/06 - Backend_Interaction/SubContext/pages/062 - Post';
import Backend_Get from './Pages/06 - Backend_Interaction/SubContext/pages/063 - Get';
import Backend_Put from './Pages/06 - Backend_Interaction/SubContext/pages/064 - Put';
import Backend_Delete from './Pages/06 - Backend_Interaction/SubContext/pages/065 - Delete';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/Intro" exact component={Intro} />
        <Route path="/Component" exact component={Component} />
        <Route path="/State" exact component={State} />
        <Route path="/Props" exact component={Props} />
        <Route path="/Manipulation-Component" exact component={Manipulation_Component} />
        <Route path="/LifeCycle-Component" exact component={LifeCycle_Component} />
        <Route path="/Backend-Interaction" exact component={Backend_Interaction} />
        <Route path="/Backend-Interaction/Local-Api" exact component={Backend_LocalApi} />
        <Route path="/Backend-Interaction/Fake-Api" exact component={Backend_FakeApi} />
        <Route path="/Backend-Interaction/Get" exact component={Backend_Get} />
        <Route path="/Backend-Interaction/Delete" exact component={Backend_Delete} />
        <Route path="/Backend-Interaction/Post" exact component={Backend_Post} />
        <Route path="/Backend-Interaction/Put" exact component={Backend_Put} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
