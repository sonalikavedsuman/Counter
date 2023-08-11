import React, { useState } from "react";

const Counter = () => {
    const [inputValue,setInputvalue] = useState(0);

    const increment = () => {
        setInputvalue(inputValue + 1);
    }
    const decrement = () => {
        setInputvalue(inputValue - 1);
    }
    const reset = () => {
        setInputvalue(0);
    }

    const btnStyle = {
        backgroundColor: 'black',
        color: 'green',
        width: '70px',
        padding: '10px',
        margin: '8px'
    }
    

    return(
        <div style={{backgroundColor:'lightgreen',height: '300px',padding: '50px'}}>
            <h1>Count :- {inputValue}</h1>
            <button style={btnStyle} onClick={increment}>+</button>
            <button style={btnStyle} onClick={decrement}>-</button>
            <button style={btnStyle} onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter;