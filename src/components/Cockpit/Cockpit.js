import React from 'react'
import classes from './Cockpit.css'
const cockpit = (props) => {
    const red = {
        color: 'black',
        fontWeight: 'none' 
    }

    let btnClass = ''

    if(props.showPersons) {
        btnClass = classes.Red
    }

    if(props.persons.length <= 2){
        red.color = 'red'
    }
    if(props.persons.length <= 1){
        red.fontWeight = 'bold'
    }

    return(
        <div className={classes.Cockpit}>
            <h1>{props.appTitle}</h1>
            <p style={red}>This is really working</p>
            <button 
            className={btnClass}
            onClick={props.clicked}>Switch Name
            </button> 
        </div>
    )
}

export default cockpit