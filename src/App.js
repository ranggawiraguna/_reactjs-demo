import React from 'react';
import './App.css';
import {Header, Contents} from './Dashboard';

function App() {
  return (
    <div className="App">
      <div className="App-Container">
        <Header innerValue="React JS"/>
        <Contents
          listContent={[
            "State",
            "Props",
            "Undefined",
            "Undefined",
            "Undefined",
            "Undefined",
            "Undefined",
            "Undefined"
          ]}
        />
      </div>
    </div>
  );
}

export default App;
