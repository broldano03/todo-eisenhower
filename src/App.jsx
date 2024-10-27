import { useState } from 'react'
import './App.css'
import { useMenuContext } from './context/MenuContext'
import InputTarea from './components/InputTarea'
import MatrizEisen from './components/eisenhower/MatrizEisen'
import TodoBasic from './TodoBasic'
import { Navigate } from 'react-router-dom'


function App() {

  if (!localStorage.getItem("tokenTODO")) return <Navigate to="/login" />

  const { selectedComponent } = useMenuContext()
  const [tasks, setTasks] = useState([])

  return (
    <>
      <div className='container-principal'>
        <div className="allTasks">
          <div className='container'>
            <InputTarea setTasks={setTasks}/>
          </div>
        </div>
          {selectedComponent === "EisenHower" 
            && <MatrizEisen tasks={tasks} setTasks={setTasks} />}
          {selectedComponent === "ToDo-Basic" 
            && <TodoBasic tasks={tasks} setTasks={setTasks} />}
      </div>
    </>
  )
}

export default App
