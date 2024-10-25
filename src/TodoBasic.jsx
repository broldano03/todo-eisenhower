import MostrarTarea from "./components/mostrarTareas/MostrarTarea"

const TodoBasic = ({tasks, setTasks}) => {
    return (
        
        <>
        <MostrarTarea tasks={tasks} setTasks={setTasks} 
        filtraPor="All"/>
        </>
    )
}

export default TodoBasic