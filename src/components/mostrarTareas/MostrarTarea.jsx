import './MostrarTarea.css'
import Tarea from './Tarea'

function MostrarTarea ({tasks, setTasks, filtraPor}) {
    
    const tareasFiltradas = tasks.filter(task => task.clasificacion === filtraPor)

    return (
        <div className="seccion-tarea">
            <h3>Pendientes</h3>
            <ul id="lista">
                {tareasFiltradas.map((task) => (
                    <Tarea key={task.id} task={task} setTasks={setTasks} />
                ))}
            </ul>
        </div>
        
    )
}

export default MostrarTarea