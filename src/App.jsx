import { useState } from 'react'
import './App.css'
import Encabezado from './components/Encabezado'
import InputTarea from './components/InputTarea'
import MatrizEisen from './components/eisenhower/MatrizEisen'

function App() {
  const [tasks, setTasks] = useState([])

  return (
    <>
      <Encabezado titulo="TO-DO LIST" subtitulo="¡Vamos por tus metas!"/>
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
