import React, { Component } from 'react';
import {FirstColumn} from './FirstColumn.js';
import {LastColumn} from './LastColumn.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1> Periodic Table</h1>
        </header>
      <div className="Container">

      <FirstColumn />
      <LastColumn />
        <div className="Elem Elem_57_71">
        </div>

       <div className="Elem Elem_89_103">
       </div>
      </div>
      </div>
   );
  }
}

export default App;
