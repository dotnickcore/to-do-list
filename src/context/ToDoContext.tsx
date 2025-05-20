import { useState } from "react";
import type { IToDo } from "../interfaces/IToDo";
import type { IFormInput } from "../interfaces/IFormInput";
import { ToDoResultsContext } from "./ToDoContextInstance";
import type { ToDoContextValue } from "./ToDoContextValue";

export default function ToDoProvider({ children }: { children: React.ReactNode }) {
  const [todos, setToDos] = useState<IToDo[]>([])

  const handleAddToDo = (formData: IFormInput) => {
    setToDos((previousToDos) => {
      const newToDo: IToDo = {
        id: Math.random(),
        text: formData.text.trim(),
        completed: false
      };

      return [...previousToDos, newToDo];
    });
  }

  const handleSetToDoStatus = (id: number, status: boolean) => {
      setToDos(todos.map(t => t.id === id ? {...t, completed: status} : t))
  }

  const value: ToDoContextValue = {
    todos,
    handleAddToDo,
    handleSetToDoStatus
  }

  return (
    <ToDoResultsContext.Provider value={value}>
      {children}
    </ToDoResultsContext.Provider>
  )
}