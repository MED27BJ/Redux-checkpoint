// Component that contain tha map, filter of the task
//importation

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editTask } from '../Redux/toDoSlice'
import { Link } from 'react-router-dom'
//the main function of the component
const ListTask = () => {
  const toDos=useSelector((state)=>state.toDo.toDoList)
  const dispatch=useDispatch()
  const [done,setDone]=useState(true)
  const [all,setAll]=useState(true)
  
   return (
    <div>
    <button onClick={()=>setAll(!all)}>{!all? "All":"Filter"}</button>
     {toDos.length>0?
      <div>
    {all ?  (toDos.map((item) => (<div className='select'>
    <Link to ={`/task/${item.id}`}>
    <h4  onClick={() => (dispatch(editTask(item.id)))}className={item.isDone ? "done" : ""} key={item.id}>{item.description}{item.isDone&&"✔️"}</h4>
    </Link>
<input type='checkbox'
onClick={()=>{
  dispatch(editTask(item.id))
}}
/>
</div>
    )
  
  )

    ):
      <div>

        <button onClick={()=>setDone(!done)}>{!done?"Not Done":"Done"}</button>

        {toDos.filter((el)=>el.isDone===done)
  
          .map((item) => (<div className='select'><h4 onClick={() => (dispatch(editTask(item.id)))} className={item.isDone ? "done" : ""} key={item.id}>{item.description}{item.isDone&&"✔️"}</h4>
      <input type='checkbox'
      onClick={()=>{
        dispatch(editTask(item.id))
      }}
      />
      </div>))

        }
        
        </div>
      }</div>:<h4>No task</h4>}
        </div> 
        )

}
//exportation of the component
export default ListTask
