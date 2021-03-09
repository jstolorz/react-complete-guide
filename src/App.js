import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            { name: 'janusz', age: 51 },  
            { name: 'janusz2', age: 52 },  
            { name: 'janusz3', age: 53 },  
        ]
    }

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                { name: newName, age: 51 },
                { name: 'olo2', age: 52 },
                { name: 'olo3', age: 53 },
            ]
        })
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: 'olo', age: 51 },
                { name: event.target.value, age: 52 },
                { name: 'olo3', age: 53 },
            ]
        })
    }

  render() {
    return (
      <div className="App">
            <h1>Hi react app</h1>
            <button onClick={() => this.switchNameHandler('Janusz Stolorz')}>Switch Name</button>
            <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}
                click={this.switchNameHandler.bind(this, 'Jaba')}
                changed={this.nameChangedHandler}
            />
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
