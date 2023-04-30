import React from 'react'
import GoalItem from './GoalItem'

import "./GoalsList.css"

const GoalsList = (props) => {
  return (
    <div>
    <ul className='goal-list'>
        {props.items.map((goal) => {
            <GoalItem
            key = {goal.id}
            id = {goal.id}
            onDelete = {props.onDeleteItem}
            >
                {goal.text}
            </GoalItem>
        })}
      </ul>
    </div>
  )
}

export default GoalsList
