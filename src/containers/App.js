import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
class App extends Component {
  constructor(props) {
    super(props)
    console.log('[App.js] Inside Constructor', props)      
  }

  
  componentWillMount() {
    console.log('[App.js] Inside ComponentWillMount')      
  }
  
  componentDidMount() {
    console.log('[App.js] Inside ComponentDidMount()')
  }
  
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
    console.log('[App.js] Inside render()')
    let persons = null
    if (this.state.showPersons) {
        persons = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          />
    }

    return (
        <div className={classes.App}>
          <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.toglePersonsHandler}
          />
          {persons}
        </div>  
    )
  }
}

export default App
