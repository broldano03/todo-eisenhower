import './MostrarTarea.css'
import Tarea from './Tarea'

function MostrarTarea ({tasks, setTasks, filtraPor}) {
    
    const tareasFiltradas = filtraPor === "All" 
        ? tasks 
            : tasks.filter(task => task.clasificacion === filtraPor);

    return (
        <div className="seccion-tarea">
            <h3>Pendientes</h3>
            <ul id="lista">
                {Array.isArray(tareasFiltradas) && tareasFiltradas.length > 0 ? (
                    tareasFiltradas.map((task) => (
                        <Tarea key={task.id} task={task} setTasks={setTasks} />
                    ))
                ) : (
                    <li>No hay tareas pendientes.</li>
                )}
            </ul>
        </div>
        
    )
}

export default MostrarTarea