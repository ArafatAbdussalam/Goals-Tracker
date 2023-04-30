import React, { useState } from 'react'
import Button from "../UI/Button"
import "./GoalInput.css"

const GoalInput = (props) => {

    const [enteredValue, setEnteredvalue] = useState("")

    const goalInputChangeHandler = (event) => {
        setEnteredvalue(event.target.value)
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.onAddGoal(enteredValue)
    }

  return (
    <div>
      <form onSubmit = {formSubmitHandler}>
        <div className='form-control'>
            <label>Daily Goal</label>
            <input type="text" onChange={goalInputChangeHandler} />
        </div>
        <Button type = "submit">Add New Goal</Button>
      </form>
    </div>
  )
}

export default GoalInput
