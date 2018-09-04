import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person'
class App extends Component {
  state = {
    persons: [
      {id: 'asdasd', name: 'DcT', age: 21},
      {id: 'saasas', name: 'Neto', age: 22},
      {id: 'dsdaaa', name: 'Chaves', age: 23}
    ],
    showPersons: false
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({persons: persons})
  }
  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  toglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons:!doesShow})
  }
  render() { 
    const red = {
      color: 'black',
      fontWeight: 'none' 
    }


    let persons = null
    let btnClass = ''
    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index)=>{
            return <Person 
              click={this.deletePersonHandler.bind(this,index)} 
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event,person.id)}
            />
          })}
      </div>
      )
      btnClass = classes.Red
    }

    if(this.state.persons.length <= 2){
      red.color = 'red'
    }
    if(this.state.persons.length <= 1){
      red.fontWeight = 'bold'
    }


    return (
        <div className={classes.App}>
          <p style={red}>This is really working</p>
          <button 
          className={btnClass}
          onClick={this.toglePersonsHandler}>Switch Name
          </button> 
          {persons}
        </div>  
    )
  }
}

export default App
