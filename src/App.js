import { useState } from 'react'
import {Header} from './Components/Header';
import './App.css';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask'



const App = () => {
  const [ showAddTask, setShowAddTask] = useState (false)
  const [ tasks, setTasks ] = useState (  [
    {
        id: 1,
        text: 'Gym',
        day: 'Monday @ 2:00pm',
        reminder: true

    },
    {
        id: 2,
        text: 'Meeting',
        day: 'Wednesday @ 10:00am',
        reminder: true

    },
    {
        id: 3,
        text: 'Haircut',
        day: 'Friday @ 5:00pm',
        reminder: false

    },
])

const addTask = (task) => {
  const id = Math.floor(Math.random() * 1000) +1
  const newTask ={id, ...task}
  setTasks([...tasks, newTask])
}
  
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task
  )
  )
}


  return (
    
    <div className="container">
      
      <Header title = 'Task Tracker' />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> ): (
        'No Tasks to Show'
      )}
      
      
    </div>
  );
}

export default App;
