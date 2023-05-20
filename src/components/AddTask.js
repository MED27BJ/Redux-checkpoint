// component to add a task
//importation
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToDo } from '../Redux/toDoSlice'
import { Form } from 'react-bootstrap'

// main function to add the task
const AddTask = () => {
  const [task,setTask]=useState({
    id:Math.random(),
    description:"",
    isDone:false,
  })
  const dispatch=useDispatch()
  return (
    <div>
    <Form>
    <input type="text" onChange={(e)=>setTask({...task,description:e.target.value})}/>
    <button type ="reset" onClick={()=>  task.description&& dispatch(addToDo(task),setTask({...task,description:""}))}>+</button>
</Form> 

    </div>
  )
}
//exportation of the function
export default AddTask
