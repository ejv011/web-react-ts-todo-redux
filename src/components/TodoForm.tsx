import { ChangeEvent, useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { addTodo } from "../features/taskSlice";
import { TasksProps } from "../Interface";


export const TodoForm = () => {
  const [todo, setTodo] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleFormSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // addTodo({
    //   name: todo,
    //   completed: false,
    //   id: Date.now(),
    // });
    dispatch(addTodo({name:todo}))
    setTodo("");
  };

  return (
    <div className="todo__form">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={todo}
          onInput={(e: ChangeEvent<HTMLInputElement>) =>
            setTodo(e.target.value)
          }
          required
          autoFocus
          maxLength={50}
          placeholder="Add Todo Task"
        />
        <button aria-label="Add Task" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

// interface TodoFormProps {
//   addTodo(todo: TasksProps): void;
// }

// export const TodoForm = ({ addTodo }: TodoFormProps) => {
//   const [todo, setTodo] = useState<string>("");

//   const handleFormSubmit = (e: ChangeEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     addTodo({
//       name: todo,
//       completed: false,
//       id: Date.now(),
//     });
//     setTodo("");
//   };

//   return (
//     <div className="todo__form">
//       <form onSubmit={handleFormSubmit}>
//         <input
//           type="text"
//           value={todo}
//           onInput={(e: ChangeEvent<HTMLInputElement>) =>
//             setTodo(e.target.value)
//           }
//           required
//           autoFocus
//           maxLength={50}
//           placeholder="Add Todo Task"
//         />
//         <button aria-label="Add Task" type="submit">
//           Add
//         </button>
//       </form>
//     </div>
//   );
// };
