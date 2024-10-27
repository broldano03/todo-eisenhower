import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import './MostrarTarea.css'
import IconosTareas from './IconosTareas'

function Tarea ({task, setTasks}) {

    const actualizarLocalStorage = (tasks) => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    const tareaRealizada = (taskId) => {
        setTasks((prevTasks) => {
            const updateTasks = prevTasks.map((task) =>
                task.id === taskId ? { ...task, realizado: !task.realizado } : task
            )
            actualizarLocalStorage(updateTasks)
            return updateTasks
        })
    }

    const editarTarea = (taskId, nuevoNombre) => {
        setTasks((prevTasks) => {
            const updateTasks = prevTasks.map((task) =>
                task.id === taskId ? { ...task, nombre: nuevoNombre} : task
            )
            actualizarLocalStorage(updateTasks)
            return updateTasks
        })
    }

    const activarInput = (taskId) => {
        setTasks((prevTasks) => {
            const updateTasks = prevTasks.map((task) =>
                task.id === taskId ? { ...task, editable: !task.editable } : task
            )
            actualizarLocalStorage(updateTasks)
            return updateTasks
        })
    }

    const tareaEliminada = (taskId) => {
        setTasks((prevTasks) =>{
            const updateTasks = prevTasks.filter(
                (task) => task.id !== taskId
            )
            actualizarLocalStorage(updateTasks)
            return updateTasks
        }
            
        )
    }

    function taskDone (task) { return task.realizado ? faCheckCircle : faCircle }
    function lineThrough (task) {return task.realizado ? 'line-through' : ''}
    function editable (task) {return task.editable ? "por-editar": ""}
    function editTask (task) {return e => editarTarea(task.id, e.target.value)}
    function inputEnter (task) {return ((e) => { if (task.editable) {
                                        if (e.key === 'Enter') { activarInput(task.id)}}})}
    function editExitClick (task) {return (() => { if (task.editable) 
                                        { activarInput(task.id)}})}

    return (
        <li className="elementodelista">
            <FontAwesomeIcon icon={taskDone(task)} 
                onClick={() => tareaRealizada(task.id)} className='ico'/>
            <input
                className={`text ${lineThrough(task)} ${editable(task)} `}
                value={task.nombre} readOnly={!task.editable} 
                onChange={editTask(task)}
                onKeyDown={inputEnter(task)}
                onBlur={editExitClick(task)}
            />
            <IconosTareas task={task} setTasks={setTasks} activarInput={activarInput}
            tareaEliminada={tareaEliminada} />
        </li>
    )
}

export default Tarea
