import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons:[{
      name:"Sureeth", age: 35},
      {name:"Sudheer", age: 25},
      {name:"Suchitra", age: 15
    }]
  }

clickMeHandler = ()=>{
  console.log("Was clicked");
  this.setState({persons:[{
    name:"Supreeth", age: 15},
    {name:"Sudheer M", age: 25},
    {name:"Suchitra M", age: 25
  }]})
}

  render() {
    return (
      <div className="App">
        <h1>I'm Supreeth Kumar</h1>
        <button onClick= {this.clickMeHandler} >Click Me</button>
        <Person name={this.state.persons[0].name} age ={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age ={this.state.persons[1].age}>
          <h2>This is child</h2>
        </Person>
        <Person name={this.state.persons[2].name} age ={this.state.persons[2].age}></Person>
      </div>
    );
  }
}

export default App;
