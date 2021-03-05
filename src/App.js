import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi react app</h1> 
        <p>Normalny paragraf</p>
        <Person name="janusz" age="51"/>
        <Person name="iwona" age="50"/>
      </div>
    );
  }
}

export default App;
