import { useState } from 'react';

export const TaskCreator = (props) => {
    /* props es un objeto que almacena las propiedades de TaskCreator
      se usa para llamar funciones o valores que se le otorquen a
      TaskCreator cuando se llama en app.js*/

    
    console.log(props)

    const [newTaskName, setNewTaskName] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault()
      props.createNewTask(newTaskName)
      setNewTaskName('')
    }

    /* el botón funciona debido a que está en un formulario
     (form) también por la misma lógica funciona el enter*/
    return(<form onSubmit={handleSubmit} className= "my-2 row">
      <div className='col-9'>
        <input 
          type="text" 
          placeholder='Enter a new task' 
          value = {newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          className = "form-control"
          />
      </div>
      <div className='col-3'>
        <button className='btn btn-primary btn-sm'>Save Task</button> 
      </div>
    </form>)
}