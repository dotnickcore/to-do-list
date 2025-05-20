import { createContext } from 'react';
import type { ToDoContextValue } from './ToDoContextValue';

export const ToDoResultsContext = createContext<ToDoContextValue | undefined>(
  undefined
);
