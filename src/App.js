import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App/GlobalStyle.css';
import Dashboard from './App/Dashboard';
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
import React_Router from './Pages/07 - React_Router/React_Router';
import Router_Basic from './Pages/07 - React_Router/SubContext/070 - BasicRouter';
import Router_Structuring_Naming from './Pages/07 - React_Router/SubContext/071 - Sructuring-Naming';
import Router_SendingParams from './Pages/07 - React_Router/SubContext/072 - SendingParams';
import ArticleDetail from './Pages/07 - React_Router/Containers/Pages/ArticleDetail/ArticleDetail';
import State_Management from './Pages/08 - State_Management/State_Management';
import Global_API from './Pages/09 - Global_API/Global_API';
import Hooks from './Pages/10 - Hooks/Hooks';
import Firebase from './Pages/11 - Firebase/Firebase';
import Example_Projects from './Pages/12 - Example_Projects/Example_Projects';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/Component" component={Component} />
        <Route exact path="/State" component={State} />
        <Route exact path="/Props" component={Props} />
        <Route exact path="/Manipulation-Component" component={Manipulation_Component} />
        <Route exact path="/LifeCycle-Component" component={LifeCycle_Component} />
        <Route exact path="/Backend-Interaction" component={Backend_Interaction} />
        <Route exact path="/Backend-Interaction/Local-Api" component={Backend_LocalApi} />
        <Route exact path="/Backend-Interaction/Fake-Api" component={Backend_FakeApi} />
        <Route exact path="/Backend-Interaction/Get" component={Backend_Get} />
        <Route exact path="/Backend-Interaction/Delete" component={Backend_Delete} />
        <Route exact path="/Backend-Interaction/Post" component={Backend_Post} />
        <Route exact path="/Backend-Interaction/Put" component={Backend_Put} />
        <Route exact path="/React-Router" component={React_Router} />
        <Route exact path="/React-Router/Basic-Router" component={Router_Basic} />
        <Route exact path="/React-Router/Structuring-Naming" component={Router_Structuring_Naming} />
        <Route exact path="/React-Router/Sending-Params" component={Router_SendingParams} />
        <Route exact path="/React-Router/Sending-Params/Article" component={Router_SendingParams} />
        <Route exact path="/React-Router/Sending-Params/Article/:id" component={ArticleDetail} />
        <Route exact path="/State-Management" component={State_Management} />
        <Route exact path="/Global-API" component={Global_API} />
        <Route exact path="/Hooks" component={Hooks} />
        <Route exact path="/Firebase" component={Firebase} />
        <Route exact path="/Example-Projects" component={Example_Projects} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
