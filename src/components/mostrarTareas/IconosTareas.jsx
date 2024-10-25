import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencil, faList, faBorderAll } from '@fortawesome/free-solid-svg-icons'
import OpcionesEisen from '../eisenhower/OpcionesEisen'
import { useState } from 'react'

function IconosTareas ({task, setTasks, activarInput, tareaEliminada} ){
    const [showOptions, setShowOptions] = useState(false)

    const handleToggleOptions = () => {
        setShowOptions((prev) => !prev)
    }

    const handleClasificationChange = (newClasification) => {
        setTasks((prevTasks) =>
            prevTasks.map((t) =>
                t.id === task.id ? { ...t, clasificacion: newClasification } : t
            )
        )
    }


    return (
        <>
        <FontAwesomeIcon icon={faPencil} className="pencil ico"
        onClick={() => activarInput(task.id)}/>
        <FontAwesomeIcon icon={faBorderAll}  className='falist ico' 
        onClick={handleToggleOptions}/>
        {showOptions && (
                <OpcionesEisen 
                    onClasificationChange={handleClasificationChange} 
                    clasificacionActual={task.clasificacion} />
            )}
        <FontAwesomeIcon icon={faList}  className='falist ico'/>
        <FontAwesomeIcon icon={faTrash} className="de ico" 
        onClick={() => tareaEliminada(task.id)}/>

        </>
    )
}

export default IconosTareas