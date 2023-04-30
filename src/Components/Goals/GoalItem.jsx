import React from 'react'
import "./GoalItem.css"

const GoalItem = (props) => {

    const deleteHandler = () => {
        props.onDelete(props.id);
    };

  return (
    <div>
        <li className='goal-item' onClick = {deleteHandler}>
            {props.children}
        </li>
    </div>
  )
}

export default GoalItem
