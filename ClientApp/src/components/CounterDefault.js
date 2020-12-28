/**
 * CounterDefault.js
 * Redux Essentials
 * State Management
 * Let us start by looking at a small React counter component. 
 * It tracks a number in component state and increments the number when a button is clicked.
 */
import React, { Component } from 'react';

function CounterDefault() {
    // State: a counter value
    const [counter, setCounter] = useState(0)

    // Action: code that causes an update to the state when something happens
    const increment = () => {
        setCounter(prevCounter => prevCounter + 1)
    }

    // View: the UI definition
    return (
        <div>
            Value: {counter} <button onClick={increment}>Increment</button>
        </div>
    )
}
