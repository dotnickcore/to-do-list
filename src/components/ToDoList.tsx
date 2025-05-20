import type { ToDoProps } from '../types/ToDoProps'
import ToDoItem from './ui/ToDoItem'

function ToDoList({todos}: ToDoProps) {


  return (
    <>
      {todos.length === 0 && (
        <p>Nothing In Here</p>
      )}

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <ToDoItem
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
            >
            </ToDoItem>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ToDoList