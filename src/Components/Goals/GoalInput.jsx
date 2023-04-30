import React, { useState } from 'react'
import styled from 'styled-components'
import Button from "../UI/Button"
import "./GoalInput.css"

const formControl = styled.div`
margin: 0.5rem 0;

& label {
    font-weight: bold;
    display: block;
    margin: 0.5rem;
}

& input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
}

& input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;

&.invalid input {
    border-color: red;
    background: #ffd7d7;
}

&.invalid label {
    color: red;
}

`;

const GoalInput = (props) => {

    const [enteredValue, setEnteredvalue] = useState("")
    const [isValid, setIsValid] = useState(true)

    const goalInputChangeHandler = (event) => {
        if (event.target.value.trim().length > 0 ) {
            setIsValid(true)
        }
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.onAddGoal(enteredValue)
    }

  return (
    <div>
      <form onSubmit = {formSubmitHandler}>
        <formControl className= {`form-control ${!isValid ? "Invalid" : ""}`}>
            <label>Daily Goal</label>
            <input type="text" onChange={goalInputChangeHandler} />
        </formControl>
        <Button type = "submit">Add New Goal</Button>
      </form>
    </div>
  )
}

export default GoalInput
