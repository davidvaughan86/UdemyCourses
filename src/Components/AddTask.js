
import {useState} from 'react'

const AddTask = ({ onAdd }) => {
    const [ text, setText] = useState ('')
    const [ day, setDay] = useState ('')
    const [ reminder, setReminder] = useState (false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add task')
            return
        }

        onAdd({ text, day, reminder})

        
        setText('')
        setDay('')
        setReminder(false)
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
            <label>Set Task</label>
                <input className = 'formInput' type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
        
            </div>
            <div className="form-control">
            <label>Set Date</label>
                <input className = 'formInput2' type='text' placeholder='Add Day + Time' value={day} onChange={(e) => setDay(e.target.value)} />
                
            </div>
        <div className="form-cbox">
            <label>Reminder</label>
            <input type='checkbox' value={reminder} checked={reminder} onChange={(e) => setReminder (e.currentTarget.checked)} />

        </div>

        <input className= 'submit' type='submit' value='Save' />
        
        </form>
    )
}

export default AddTask
