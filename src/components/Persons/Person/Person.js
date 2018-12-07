import React from 'react'
import PersonCss from './Person.css'

class Person extends React.Component {
    constructor(props) {
        super(props)
        console.log('[Person.js] Inside Constructor', props)      
      }
    
    componentWillMount() {
        console.log('[Person.js] Inside ComponentWillMount')      
    }
      
    componentDidMount() {
        console.log('[Person.js] Inside ComponentDidMount()')
    }
    
    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] Inside componentWill', nextProps)
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js Inside shouldComponentUpdate',nextProps, nextState)
        return false
    }
    
    render() {
        console.log('[Person.js] Inside render()')
        return (
            <div className={PersonCss.Person}> 
            <p onClick={this.props.click}>Hi my name is {this.props.name} and i have {this.props.age} years old</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name} />
        </div>
        )
    }
}

export default Person