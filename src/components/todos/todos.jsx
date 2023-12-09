import { useRef } from "react";
import { completedTasks, tasks, todos } from "./todo_signal";

export default function Todos() {
  const inputRef = useRef()

  function addTask() {
    const task = inputRef.current.value;
    console.log(task.length);
    if (task.length < 2) {
      return;
    }
    if (tasks.value.length < 1) {
      tasks.value = [{ title: task, 'completed': false }]
    } else {
      tasks.value = [...tasks.value, { title: task, 'completed': false }]
    }

    inputRef.current.value = '';
  }

  return (
    <div className='container pt-3'>
      <div className="d-flex flex-row">
        <input type="text" className="form-control w-75 me-5" ref={inputRef} placeholder="Enter Task ..." />
        <button className="btn btn-primary" onClick={addTask}>Add Task</button>
      </div>
      <h3 className="mt-5">Todos</h3>
      <div className="card m-2 p-3">
        {todos.value.map((todo) =>
          <div className="mb-3 form-check" key={todo.title}>
            <input type="checkbox" className="form-check-input" checked={todo.completed}
              onChange={(event) => tasks.value = tasks.value.filter((task) => task.title === todo.title ? todo : task)} />
            <label className="form-check-label" htmlFor="exampleCheck1">{todo.title}</label>
          </div>
        )}
      </div>

      <h3 className="mt-5">Completed Tasks</h3>
      <div className="card m-2 p-3">
        {completedTasks.value.map((task) =>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" checked={task.completed} id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">{task.title}</label>
          </div>
        )}
      </div>
    </div>
  )
}
