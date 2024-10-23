import { useState } from 'react'
import './App.css'
import Encabezado from './components/Encabezado'
import InputTarea from './components/InputTarea'
import MostrarTarea from './components/MostrarTarea'

function App() {
  const [tasks, setTasks] = useState([])

  return (
    <>
      <Encabezado titulo="TO-DO LIST" subtitulo="¡Vamos por tus metas!"/>
      <div className='container-principal'>
      <div className="allTasks">
      <div className='container'>
        
        <InputTarea setTasks={setTasks}/>
        <MostrarTarea tasks={tasks} setTasks={setTasks} />
      </div>
      </div>
      <div className='eisenhower'>

        <table class="tabla-eisenhower">
          <tr>
              <th><h2>Eisenhower</h2></th>
              <th>Urgente</th>
              <th>No Urgente</th>
          </tr>
          <tr>
              <th>Importante</th>
              <td class="haz">HAZ <MostrarTarea tasks={tasks} setTasks={setTasks}/> </td>
              <td class="planifica">PLANIFICA <MostrarTarea tasks={tasks} setTasks={setTasks}/></td>
          </tr>
          <tr>
              <th>No Importante</th>
              <td class="delegar">DELEGA <MostrarTarea tasks={tasks} setTasks={setTasks}/></td>
              <td class="eliminar">ELIMINA <MostrarTarea tasks={tasks} setTasks={setTasks}/></td>
          </tr>
        </table>
      </div>
      </div>
    </>
  )
}

export default App
