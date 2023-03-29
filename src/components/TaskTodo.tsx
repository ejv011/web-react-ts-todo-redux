import { ChangeEvent, useState } from "react";
import { TaskTodoProps } from "../Interface";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useAppDispatch } from "../app/hooks";
import { deleteTodo, toggleTodo } from "../features/taskSlice";

export const TaskTodo = ({ task, enterEditMode, setSelectedId,}: TaskTodoProps) => {
  const [isChecked, setIsChecked] = useState(task?.completed);
  const dispatch = useAppDispatch();
  const handleCheckBoxChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(toggleTodo({ id: task.id }));
    setIsChecked(!isChecked);
  };

  return (
    <div className="todoList__task">
      <div className="todoList__task-name">
        <input
          type="checkbox"
          name={task.name}
          checked={isChecked}
          onChange={handleCheckBoxChange}
          id={task.id?.toString()}
        />
        <label htmlFor={task.id.toString()}>{task.name}</label>
      </div>
      <div className="todoList__task-buttons">
        <button
          onClick={() => {
            if (task) {
              enterEditMode();
              setSelectedId(task.id);
            }
          }}
        >
          <PencilSquareIcon width={24} height={24} />
        </button>
        <button onClick={() => dispatch(deleteTodo({ id: task.id }))}>
          <TrashIcon width={24} height={24} />
        </button>
      </div>
    </div>
  );
};
