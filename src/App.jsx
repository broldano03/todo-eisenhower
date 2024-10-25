import { useState } from 'react'
import './App.css'
import InputTarea from './components/InputTarea'
import MatrizEisen from './components/eisenhower/MatrizEisen'

function App() {
  const [tasks, setTasks] = useState([])

  return (
    <>
      <div className='container-principal'>
        <div className="allTasks">
          <div className='container'>
            <InputTarea setTasks={setTasks}/>
          </div>
        </div>
        <div className='eisenhower'>
          <MatrizEisen tasks={tasks} setTasks={setTasks}/>
        </div>
      </div>
    </>
  )
}

export default App
