import { useState, type ChangeEvent } from 'react';
import { useToDoContext } from '../../hooks/useToDoContext';
import type { IToDo } from '../../interfaces/IToDo';
import EditToDo from '../EditToDo';

function ToDoItem({ id, text, completed }: IToDo) {
  const { handleSetToDoStatus, handleDeleteToDo, handleEditToDo } =
    useToDoContext();

  const [isEditing, setIsEditing] = useState(false);
  const checkToDo = (e: ChangeEvent<HTMLInputElement>) => {
    handleSetToDoStatus(id, e.target.checked);
  };

  if (isEditing) {
    return (
      <div className="py-3">
        <EditToDo
          todo={{ id, text, completed }}
          onSave={(id, newText) => {
            handleEditToDo(id, newText);
            setIsEditing(false);
          }}
          onCancel={() => setIsEditing(false)}
        />
      </div>
    );
  }

  return (
    <div className="py-3 group flex items-center justify-between">
      <div className="flex items-center space-x-3 flex-1">
        <input
          type="checkbox"
          checked={completed}
          onChange={checkToDo}
          className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        <span
          className={`text-lg font-medium flex-1 ${
            completed ? 'line-through text-gray-400' : 'text-gray-800'
          }`}
        >
          {text}
        </span>
      </div>

      <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => setIsEditing(true)}
          className="p-1 text-gray-500 hover:text-blue-600 transition-colors"
          aria-label="Edit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        </button>

        <button
          onClick={() => handleDeleteToDo(id)}
          className="p-1 text-gray-500 hover:text-red-600 transition-colors"
          aria-label="Delete"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
