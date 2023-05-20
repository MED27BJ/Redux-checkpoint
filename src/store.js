// the store
// importation and configuration of the store
import { configureStore } from '@reduxjs/toolkit'
import toDoReducer from './Redux/toDoSlice'
// exportation
export const store = configureStore({
  reducer: {
    toDo:toDoReducer,
  },
})