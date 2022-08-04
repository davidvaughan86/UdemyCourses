import { FaTimes } from "react-icons/fa";

const Task = ({task, onDelete, onToggle}) => {
    return (
        <div >
            <h3 className = {`task ${task.reminder ? 'reminder' : '' }`}
         onDoubleClick={() => onToggle(task.id)}>{task.text} <FaTimes style={{ color: '#590090', cursor: 'pointer'}}
            onClick={onDelete}/> </h3>
            <p className = {`para ${task.reminder ? 'reminder' : '' }`}
         onDoubleClick={() => onToggle(task.id)}>{task.day}</p>
        </div>
    )
}

export default Task
