import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch } from "../app/hooks";
import { RootState } from "../app/store";
import { updateTodo } from "../features/taskSlice";
import { EditFormProps } from "../Interface";

export const EditForm = ({ closeEditMode, selectedId }: EditFormProps) => {
  const [newTaskName, setNewTaskName] = useState<string>("");
  const dispatch = useDispatch();
  const { taskList } = useSelector((state: RootState) => state.tasks);

  const handleFormSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUpdatedTask = taskList.map(task=>{
      if(task.id === selectedId){
        return {
          ...task,
          name: newTaskName
        }
      }
      return task
    })
    console.log(newUpdatedTask)
    dispatch(updateTodo(newUpdatedTask))
    closeEditMode();
  };

  useEffect(() => {
    let findTask = taskList.find((task) => task.id === selectedId);
    if(findTask){
      setNewTaskName(findTask.name)
    }
  }, []);

  return (
    <div
      role="dialog"
      onClick={(e) => {
        e.target === e.currentTarget && closeEditMode();
      }}
    >
      <div className="todo__form">
        <form className="todo__form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            id="editTask"
            className="input"
            value={newTaskName}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setNewTaskName(e.target.value)
            }
            required
            autoFocus
            maxLength={60}
            placeholder="Update Task"
          />
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};
