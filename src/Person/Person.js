import React from 'react'
import PersonCss from './Person.css'
const person = (props) => {
    return (
        <div className={PersonCss.Person}> 
            <p onClick={props.click}>Hi my name is {props.name} and i have {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default person