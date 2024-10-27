import { useEffect, useState } from 'react'
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
  const [taskId, setTaskId] = useState(0)

  useEffect(() => {
    // Cargar tareas de localStorage solo cuando el componente se monta
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || []
    setTasks(storedTasks)
    setTaskId(storedTasks.length > 0 ? storedTasks[storedTasks.length - 1].id + 1 : 0)
  }, []);


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])

  return (
    <>
      <div className='container-principal'>
        <div className="allTasks">
          <div className='container'>
            <InputTarea setTasks={setTasks} taskId={taskId} setTaskId={setTaskId} />
          </div>
        </div>
          {selectedComponent === "" 
            && <MatrizEisen tasks={tasks} setTasks={setTasks} />}
          {selectedComponent === "EisenHower" 
            && <MatrizEisen tasks={tasks} setTasks={setTasks} />}
          {selectedComponent === "ToDo-Basic" 
            && <TodoBasic tasks={tasks} setTasks={setTasks} />}
      </div>
    </>
  )
}

export default App
