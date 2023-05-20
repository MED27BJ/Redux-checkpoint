// component return the edit task in a new path
//importation
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { editTask1 } from '../Redux/toDoSlice';

//the main function
const Task = () => {
  
  const param=useParams();
  const todo=useSelector((state)=>state.toDo.toDoList);
  const newTask=todo.find((el)=>el.id==param.id);
  const dispatch=useDispatch();
  const [newtext,setNewText]=useState({
    id:Math.random(),
    description:"",
    isDone:false,
  });
  
  return (
    <div>
  
      <input type="text" 
      placeholder={newTask.description} onChange={(e)=>setNewText({...newtext,description:e.target.value})}/>
    <Link to ={"/"}><button onClick={()=>(dispatch(editTask1({id:newTask.id,
test:{...newTask,description:newtext.description}})),alert("successfully change 🎯"))}>EDIT</button>
</Link>
      </div>
      
      
  )
}
//exportation
export default Task
