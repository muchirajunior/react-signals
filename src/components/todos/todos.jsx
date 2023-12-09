import { todos } from "./todo_signal";

export default function Todos() {

  function addTask() {
    console.log('render todo ..');
    let task = document.getElementById('input').value;
    if (task.length < 2) {
      return;
    }
    todos.value = [...todos.value, { title: task, 'completed': false }]
    document.getElementById('input').value = '';
  }

  function updateTodo(task) {
    console.log(task);
    todos.value=todos.value.map((item) => item.title === task.title ? task : item);
  }

  return (
    <div className='container pt-3'>
      <div className="d-flex flex-row">
        <input type="text" className="form-control w-75 me-5" id='input' placeholder="Enter Task ..." />
        <button className="btn btn-primary" onClick={addTask}>Add Task</button>
      </div>
      <h3 className="mt-5">Todos</h3>
      <div className="card m-2 p-3">
        {todos.value.map((todo)=>
          <div className="mb-3 form-check" key={todo.title}>
            <input type="checkbox" className="form-check-input" checked={todo.completed} onChange={(_) => updateTodo({ ...todo, completed: !todo.completed })} />
            <label className="form-check-label" htmlFor="exampleCheck1">{todo.title}</label>
            <button className="btn btn-info btn-sm float-end">update</button>
          </div>
        )}
      </div>

    </div>
  )
}
