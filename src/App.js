import React, { Component } from 'react';
import {FirstColumn} from './FirstColumn.js';
import {SecondColumn} from './SecondColumn.js';
import {LastColumn} from './LastColumn.js';
import {ThirdBox} from './ThirdBox';
import {FourthBox} from './FourthBox';
import {Extended} from './Extended';
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
      <SecondColumn />
      <ThirdBox />
      <FourthBox />
      <LastColumn />

      <Extended />
      </div>
      </div>
   );
  }
}

export default App;
