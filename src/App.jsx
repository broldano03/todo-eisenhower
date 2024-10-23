import { useState } from 'react'
import './App.css'
import Encabezado from './components/Encabezado'
import InputTarea from './components/InputTarea'
import MostrarTarea from './components/MostrarTarea'

function App() {
  const [tasks, setTasks] = useState([])

  return (
    <>
      <Encabezado/>
      <div className='container'>
        
        <InputTarea setTasks={setTasks}/>
        <MostrarTarea tasks={tasks} setTasks={setTasks} />
      </div>
      
    </>
  )
}

export default App
