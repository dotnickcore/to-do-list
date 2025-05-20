import { useState, useEffect, useRef } from 'react';
import type { IToDo } from '../interfaces/IToDo';

interface EditToDoProps {
  todo: IToDo;
  onSave: (id: number, text: string) => void;
  onCancel: () => void;
}

function EditToDo({ todo, onSave, onCancel }: EditToDoProps) {
  const [editedText, setEditedText] = useState(todo.text);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editedText.trim()) {
      onSave(todo.id, editedText.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex-1">
      <div className="flex items-center gap-2">
        <input
          ref={inputRef}
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          className="flex-1 px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-800"
        />
        <div className="flex gap-1">
          <button
            type="submit"
            className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Save
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

export default EditToDo;