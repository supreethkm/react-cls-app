import React, {Component} from 'react';

import Person from './Person/Person';

class Persons extends Component{

  static getDerivedStateFromProps(props, state){
    console.log('[Persons.js] getDerivedStateFromProps');
    return state;
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("[Persons.js] shouldComponentUpdate");
    return true;
  }

  render(){
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
 getSnapshotBeforeUpdate(){
   console.log('[Persons.js] getSnapshotBeforeUpdate');
   return ({message:"Snapshot !!"})
 }

 componentDidUpdate(prevProps, prevState, snapshot){
   console.log('[Persons.js] componentDidUpdate');
   console.log('snapshot', snapshot);
 }
};

export default Persons;
