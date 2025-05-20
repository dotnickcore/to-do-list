import AddToDo from '../AddToDo'
import ToDoList from '../ToDoList'
import { useToDoContext } from '../../hooks/useToDoContext';

function Dashboard() {
  const { todos } = useToDoContext();

console.log(todos)

  return (
    

    <>
      <div className="mx-4 space-y-4">
        <div className="rounded-md">
          <AddToDo />
        </div>

        <hr className="border-gray-200 my-4" />

        <div className="space-y-4">
          <ToDoList todos={todos} />
        </div>
      </div>
    </>
  )
}

export default Dashboard