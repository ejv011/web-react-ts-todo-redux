import { FC, useState } from "react";
import { TaskList } from "./components/TaskList";
import { TodoForm } from "./components/TodoForm";
import { EditForm } from "./components/EditForm";
import { PencilIcon } from "@heroicons/react/24/outline";
import { useAppSelector } from "./app/hooks";

const App: FC = () => {
  const tasks = useAppSelector((state) => state.tasks);
  const [selectedId, setSelectedId] = useState<number>(0);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const closeEditMode = (): void => {
    setIsEditing(false);
  };
  const enterEditMode = (): void => {
    setIsEditing(true);
  };

  return (
    <div className="container">
      <h1>
        <span>
          <PencilIcon width={24} height={24} />{" "}
        </span>
        Todo List App
      </h1>
      <TodoForm />
      {isEditing && (
        <EditForm
          selectedId ={selectedId}
          closeEditMode={closeEditMode}
        />
      )}
      {tasks && (
        <TaskList 
          enterEditMode={enterEditMode} 
          setSelectedId={setSelectedId}
        />
      )}
    </div>
  );
};

export default App;
