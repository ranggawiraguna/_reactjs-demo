import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './__initial/GlobalStyle.css';
import Dashboard from './__initial/Dashboard';
import Intro from './Materi/00 - Intro/Intro';
import Component from './Materi/01 - Component/Component';
import State from './Materi/02 - State/State';
import Props from './Materi/03 - Props/Props';
import Manipulation_Component from './Materi/04 - Manipulation_Component/Manipulation_Component'
import LifeCycle_Component from './Materi/05 - LifeCycle_Component/LifeCycle_Component'
import Backend_Interaction from './Materi/06 - Backend_Interaction/Backend_Interaction'
import Backend_LocalApi from './Materi/06 - Backend_Interaction/SubContext/060 - LocalApi'
import Backend_FakeApi from './Materi/06 - Backend_Interaction/SubContext/061 - FakeApi'
import Backend_Post from './Materi/06 - Backend_Interaction/SubContext/062 - Post'
import Backend_Get from './Materi/06 - Backend_Interaction/SubContext/063 - Get'
import Backend_Put from './Materi/06 - Backend_Interaction/SubContext/064 - Put'
import Backend_Delete from './Materi/06 - Backend_Interaction/SubContext/065 - Delete'

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
