import { useContext } from 'react';
import { ToDoResultsContext } from '../context/ToDoContextInstance';

export function useToDoContext() {
  const context = useContext(ToDoResultsContext);
  if (!context) {
    throw new Error('useToDoContext must be used within a ToDoProvider');
  }
  return context;
}