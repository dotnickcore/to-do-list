import type { IFormInput } from "../interfaces/IFormInput";
import type { IToDo } from "../interfaces/IToDo";


export interface ToDoContextValue {
  todos: IToDo[] | [];
  handleAddToDo: (formData: IFormInput) => void;
  handleSetToDoStatus: (id: number, status: boolean) => void;
  handleEditToDo: (id: number, newText: string) => void;
  handleDeleteToDo: (id: number) => void;
}