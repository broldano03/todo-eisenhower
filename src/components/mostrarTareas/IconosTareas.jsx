import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencil, faList, faBorderAll } from '@fortawesome/free-solid-svg-icons'

function IconosTareas ({task, activarInput, tareaEliminada} ){

    return (
        <>
        <FontAwesomeIcon icon={faPencil} className="pencil ico"
        onClick={() => activarInput(task.id)}/>
        <FontAwesomeIcon icon={faBorderAll}  className='falist ico'/>
        <FontAwesomeIcon icon={faList}  className='falist ico'/>
        <FontAwesomeIcon icon={faTrash} className="de ico" 
        onClick={() => tareaEliminada(task.id)}/>
        </>
    )
}

export default IconosTareas