import { useState } from "react";

function App() {
  
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newTask);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input onChange={(event) => setNewTask(event.target.value)} type="text" placeholder="Enter a new Task" />
        <button>Add Task</button>
      </form> 
    </div>
  )
}

export default App
