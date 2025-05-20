import type { IToDo } from '../../interfaces/IToDo'
import AddToDo from '../AddToDo'
import ToDoList from '../ToDoList'

function Dashboard() {
  const todosMock: IToDo[] = [{
    id: 1,
    text: 'test',
    completed: false
  }]

  return (
    <>
      <div className="mx-4 space-y-4">
        <div className="rounded-md">
          <AddToDo />
        </div>

        <hr className="border-gray-200 my-4" />

        <div className="space-y-4">
          <ToDoList todos={todosMock} />
        </div>
      </div>
    </>
  )
}

export default Dashboard