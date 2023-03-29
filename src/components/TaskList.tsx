import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { TaskListProps } from "../Interface";
import { TaskTodo } from "./TaskTodo";

export const TaskList = ({enterEditMode, setSelectedId}: TaskListProps) =>{
  const {taskList} = useSelector((state: RootState) => state.tasks);
  return(
    <div className="todoList">
      {
        taskList.map((task) => (
          <TaskTodo 
            key={task.id}
            task={task}
            enterEditMode={enterEditMode}
            setSelectedId={setSelectedId}
          />
        ))
      }
    </div>
  )
}