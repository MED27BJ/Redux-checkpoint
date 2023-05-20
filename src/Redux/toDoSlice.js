// slice component
//importation
import { createSlice } from '@reduxjs/toolkit'
import { toDoList } from '../toDoList'
// initialisation
const initialState = {
 toDoList,
}
// export of the function
export const toDoSlice = createSlice({
  name: 'toDo',
  initialState,
  reducers: {
    addToDo:(state,action)=>{
      state.toDoList=[action.payload,...state.toDoList]
    },
    editTask: (state, action) => {
        let taskTarget = state.toDoList.find((el) => el.id == action.payload);
         console.log(taskTarget);
       taskTarget.isDone = !taskTarget.isDone;
      
  },
  editTask1:(state, action) => {
    let tasktar=state.toDoList.findIndex((el)=>el.id==action.payload.id);
       state.toDoList[tasktar]=action.payload.test;
},
  },
});

// Action creators are generated for each case reducer function
export const { addToDo,editTask,editTask1} = toDoSlice.actions

export default toDoSlice.reducer