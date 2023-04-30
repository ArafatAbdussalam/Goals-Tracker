import React, { useState } from 'react'
import GoalInput from "./Components/Goals/GoalInput"
import GoalsList from "./Components/Goals/GoalsList"

import "./App.css"

const App = () => {

 const [dailyGoals, setDailyGoals] = useState([
    {text: "Hit the gym", id: "g1"},
    {text: "Write a technical article", id: "g2"}
  ]);

  const addGoalHandler = (newGoalText) => {
    setDailyGoals(
      (prevGoals) => {
        const newGoals = [...prevGoals];
        newGoals.unshift({text: newGoalText, id: Math.random().toString() })
        return newGoals;
      });
  };

  const deleteGoalHandler = (goalId) => {
    setDailyGoals(
      (prevGoals) => {
        const newGoals = prevGoals.filter(goal => goal.id !== goalId);
        return newGoals;
      });
  };

  let content = (
    <p>You have not entered any goal. Click to add a new one.</p>
  );

  if (dailyGoals.length > 0) {
    content = (
      <GoalsList items = {dailyGoals} onDeleteItem = {deleteGoalHandler} />
    );
  };


  return (
    <div>
      <section id="goal-form">
        <GoalInput onAddGoal = {addGoalHandler} />
      </section>

      <section id="goals">
        {content}
      </section>
    </div>
  )
}

export default App

