import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TasksProps, TasksState } from "../Interface";

const initialState: TasksState ={
  taskList: []
}

export const taskSlice=createSlice({
  name:'task',
  initialState,
  reducers:{
    addTodo: (state,action:PayloadAction<{name: string}>): void=>{
      const newTodo: TasksProps ={
        id:Date.now(),
        name: action.payload.name,
        completed: false
      }
      state.taskList.push(newTodo)
    },
    deleteTodo:(state, action: PayloadAction<{id:number}>): void=>{
      state.taskList = state.taskList.filter(task => task.id !== action.payload.id)
    },
    toggleTodo: (state, action:PayloadAction<{id: number}>): void =>{
      state.taskList = state.taskList.map(task => (task.id === action.payload.id 
        ? {...task, completed: !task.completed} 
        : task
      ))
    },
    updateTodo: (state, action:PayloadAction<TasksProps[]>) => {
      state.taskList = action.payload;
    }
  }
})

export const { addTodo, deleteTodo, updateTodo, toggleTodo } = taskSlice.actions

// export const selectTask = (state: RootState) => state.counter.value

export default taskSlice.reducer