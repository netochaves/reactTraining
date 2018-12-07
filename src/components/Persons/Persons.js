import React from 'react'
import Person from '../Persons/Person/Person'

class Persons extends React.Component{
    constructor(props) {
        super(props)
        console.log('[Persons.js] Inside Constructor', props)      
    }
    
      
    componentWillMount() {
        console.log('[Persons.js] Inside ComponentWillMount')      
    }
      
    componentDidMount() {
        console.log('[Persons.js] Inside ComponentDidMount()')
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] Inside componentWill', nextProps)
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js Inside shouldComponentUpdate',nextProps, nextState)
        return true
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js Inside ComponentWillUpdate',nextProps, nextState)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('[UPDATE Persons.js Inside componentDidUpdate',prevProps, prevState)
    }
    
    render() {
        console.log('[Persons.js] Inside render()')

        return (
            this.props.persons.map((person, index)=>{
                return <Person 
                  click={this.props.clicked.bind(this,index)} 
                  name={person.name} 
                  age={person.age}
                  key={person.id}
                  changed={(event) => this.props.changed(event,person.id)}
                />
              })
        )
    }
}
   
export default Persons

