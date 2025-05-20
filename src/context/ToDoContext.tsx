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

  const value: ToDoContextValue = {
    todos,
    handleAddToDo
  }

  return (
    <ToDoResultsContext.Provider value={value}>
      {children}
    </ToDoResultsContext.Provider>
  )
}