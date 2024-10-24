import MostrarTarea from "../MostrarTarea"


function MatrizEisen ({tasks, setTasks}) {

    return (
        <table className="tabla-eisenhower">
        <thead>
            <tr>
                <th><h2>Eisenhower</h2></th>
                <th>Urgente</th>
                <th>No Urgente</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th>Importante</th>
                <td className="haz">HAZ <MostrarTarea tasks={tasks} setTasks={setTasks}/> </td>
                <td className="planifica">PLANIFICA <MostrarTarea tasks={tasks} setTasks={setTasks}/></td>
            </tr>
            <tr>
                <th>No Importante</th>
                <td className="delegar">DELEGA <MostrarTarea tasks={tasks} setTasks={setTasks}/></td>
                <td className="eliminar">ELIMINA <MostrarTarea tasks={tasks} setTasks={setTasks}/></td>
            </tr>
            </tbody>
        </table>
    )
}

export default MatrizEisen