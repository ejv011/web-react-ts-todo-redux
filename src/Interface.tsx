import { SetStateAction } from "react";

export interface TasksProps {
  id: number
  name: string 
  completed: boolean
}

export interface TaskListProps{
  enterEditMode (): void;
  setSelectedId: React.Dispatch<SetStateAction<number>>
}

export interface TaskTodoProps{
  task:TasksProps;
  enterEditMode(): void;
  setSelectedId: React.Dispatch<SetStateAction<number>>
}

export interface EditFormProps{
  closeEditMode ():void;
  selectedId: number;
}

export interface TasksState{
  taskList: TasksProps[]
}

export interface EditMode{
  enterEditMode (): void;
}